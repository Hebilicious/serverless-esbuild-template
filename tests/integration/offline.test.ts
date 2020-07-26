import execa from "execa"
import fetch from "node-fetch"
import { offlineUrl, waitForPort } from "../../scripts/helpers"

const httpPort = process.env.SLS_OFFLINE_HTTP_PORT || 3000
const lambdaPort = process.env.SLS_OFFLINE_LAMBDA_PORT || 3000

beforeAll(async () => {
    const timeout = 15000
    console.log("Booting up sls offline...")
    await execa("yarn", ["offline:start"])

    // sls offline serves two services, so we make sure those
    // port are reachable. This is useful in CI !
    await waitForPort({ port: Number(lambdaPort), timeout })
    await waitForPort({ port: Number(httpPort), timeout })
})

afterAll(async () => {
    console.log("Tearing down sls offline...")
    await execa("yarn", ["offline:stop"])
})

describe("handler Tests", () => {
    const helloUrl = offlineUrl({ path: "hello" })

    test.each([[helloUrl, 200]])("%s returns a %i", async (url, code) => {
        const { status } = await fetch(url)
        expect(status).toBe(code)
    })

    test.each`
        url         | contentType
        ${helloUrl} | ${"application/json"}
    `("the content-type is $contentType", async ({ url, contentType }) => {
        const { headers } = await fetch(url)
        expect(headers.get("content-type")).toContain(contentType)
    })

    const helloMessage = "Go Serverless v1.0! Your function executed successfully!"
    it("the message is correct", async () => {
        const { message } = await await fetch(helloUrl).then((r) => r.json())
        expect(message).toBe(helloMessage)
    })
})
