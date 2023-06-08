const news = require("../db/db");

const getNews = async (req, res, next) => {
    try {
        const page = parseInt(req.params.pageNo) || 1;
        const perPage = 20;
        const noOfPages = parseInt(req.params.noOfPages) || 1;
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + (perPage*noOfPages);
        const paginatedArticles = news.slice(startIndex, endIndex);
        res.json({
            success: true,
            data: paginatedArticles,
            currPage: page,
            nextPage: page+noOfPages
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Internal error occured'
        });
    }
}

module.exports = {
    getNews
}