import { prisma } from "@/config/db"
export default async (req: any, res: any) => {
    if (req.method === "POST") {
        try {
            const user = await prisma.user.create({
                data: {
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password
                },
            })
            console.log(user)
            res.status(200).json({ success: true, user })
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ success: false, user: {} })
        }
    }
    if (req.method === "GET") {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: req.query.email
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            })
            console.log(user)
            res.status(200).json({ success: true, user })
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ success: false, user: {} })
        }
    }
    if (req.method === "PUT") {
        try {
            const updateUser = await prisma.user.update({
                where: {
                    email: req.query.email,
                },
                data: {
                    name: req.body.name
                }
            })
            console.log(updateUser)
            res.status(200).json({ success: true, user:updateUser })
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ success: false, user: {} })
        }
    }
    if (req.method === "DELETE") {
        try {
            const deleteUser = await prisma.user.delete({
                where: {
                    email: req.query.email,
                },
            })
            console.log(deleteUser)
            res.status(200).json({ success: true, user:deleteUser })
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ success: false, user: {} })
        }
    }
}