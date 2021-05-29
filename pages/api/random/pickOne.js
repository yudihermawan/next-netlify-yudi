export default function handler(req, res) {
    if (req.method === 'GET') {
        const { list, min, max } = req.query
        const options = list.split(",");
        res.status(200).json({
            picked: options[Math.floor(Math.random() * options.length)].trim()
        })
    } else {
        res.status(400).json({ errMessage: "Oops" })
    }
}