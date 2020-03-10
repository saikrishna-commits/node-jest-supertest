const createPost = async (req, res) => {
    try {
        const post = { "title": "Book1", author: "atom" }
        return res.status(201).json({
            post,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = [{ title: "tes1" }, { title: "test2" }]
        return res.status(200).json({ posts });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createPost,
    getAllPosts
}