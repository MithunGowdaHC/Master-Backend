export const demo =  (req, res, next) => {
    console.log("New middleware")
    next()
}

export const second = (req, res, next) => {
    console.log("Second Middleware")
}