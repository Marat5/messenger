import { expect } from "chai";
import authApi from '../static/js/api/auth'
import chatApi from '../static/js/api/chat'
import profileApi from '../static/js/api/profile'


describe("Auth api test", () => {
    it("Auth api is object", () => {
        expect(typeof authApi).to.equal("object");
    });
});

describe("Chat api test", () => {
    it("Chat api is object", () => {
        expect(typeof chatApi).to.equal("object");
    });
});


describe("Profile api test", () => {
    it("Profile api is object", () => {
        expect(typeof profileApi).to.equal("object");
    });
});

