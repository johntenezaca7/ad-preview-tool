const LayoutOptions = require("./LayoutOptions")
// @ponicode
describe("LayoutOptions.mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            LayoutOptions.mapStateToProps({ layoutType: "string", typesOfLayouts: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            LayoutOptions.mapStateToProps({ layoutType: "object", typesOfLayouts: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            LayoutOptions.mapStateToProps({ layoutType: "array", typesOfLayouts: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            LayoutOptions.mapStateToProps({ layoutType: "number", typesOfLayouts: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            LayoutOptions.mapStateToProps({ layoutType: "array", typesOfLayouts: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            LayoutOptions.mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
