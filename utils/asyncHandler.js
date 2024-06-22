const asyncHandler = (requesthandler) => {
    async (req, res, next) => {
        try {
            await requesthandler.call(req, res, next);
        } catch (error) {
            res.status(err.code || 500).json({
                success: false,
                message : error.message    
            });
        }
    };
}

/*
    const asyncHandler = (requesthandler) => {
        (req, res, next) => {
            promise
            .resolve(requesthandler(req, res, next))
            .catch((err) => next(err));
        }
*/


export {asyncHandler}