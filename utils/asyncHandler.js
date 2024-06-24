const asyncHandler = (requesthandler) => {
    return async (req, res, next) => {
        try {
            await requesthandler(req, res, next);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                success: false,
                message : error.message
            });
        }
    };
}


    // const asyncHandler = (requesthandler) => {
    //     return (req, res, next) => {
    //         promise
    //         .resolve(requesthandler(req, res, next))
    //         .catch((err) => next(err));
    //     }
    // }


export { asyncHandler }