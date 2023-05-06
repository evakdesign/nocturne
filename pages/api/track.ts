import { prisma } from "@/config/db";
// export default async (req:any, res:any) => {
//   if (req.method === "POST") {
//     try {
//       const track = await prisma.track.create({
//         data: {
//             artist:{
//                 connectOrCreate:{
//                   where:{
//                     id: req.body.artistId || ""
//                   },
//                   create: {
//                     name: req.body.artistName
//                   }
//                 }
//             },
//               songName: req.body.songName,
//               albumName: req.body.albumName,
//               labelName: req.body.labelName,
//               trackSrc: req.body.trackSrc,
//               trackImageSrc: req.body.trackImageSrc,
//               inQueue: true
//             },
//       });
//       console.log(track);
//       res.status(200).json({ success: true, track });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ success: false, track: {} });
//     }
//   }
//   if (req.method === "GET") {
//     try {
//       const track = await prisma.track.findUnique({
//         where: {
//           email: req.query.email,
//         },
//         select: {
//           id: true,
//           name: true,
//           email: true,
//         },
//       });
//       console.log(track);
//       res.status(200).json({ success: true, track });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ success: false, track: {} });
//     }
//   }
//   if (req.method === "PUT") {
//     try {
//       const updatetrack = await prisma.track.update({
//         where: {
//           email: req.query.email,
//         },
//         data: {
//           name: req.body.name,
//         },
//       });
//       console.log(updatetrack);
//       res.status(200).json({ success: true, track: updatetrack });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ success: false, track: {} });
//     }
//   }
//   if (req.method === "DELETE") {
//     try {
//       const deletetrack = await prisma.track.delete({
//         where: {
//           email: req.query.email,
//         },
//       });
//       console.log(deletetrack);
//       res.status(200).json({ success: true, track: deletetrack });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ success: false, track: {} });
//     }
//   }
// };
