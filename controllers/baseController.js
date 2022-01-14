const {User} = require('../models')

module.exports = {
    index: (req, res) => {
      res.status(200).json({
        status: true,
        message: "Hello World!"
      })
    },
    getAll: async (req,res) => {
        let data = await User.findAll()
        res.status(200).json({
            data : data
          })
    },
    printPDF: async (req,res) => {
      let data = await User.findAll()
      console.log(data)
      let renderData = []
      data.map((item, index) => {
          renderData.push(`<tr>
          <td>
              ${index + 1}
          </td>
          <td>
             ${item.name}
          </td>
        </tr>`)
      })
      res.pdf(
        `<table>
        <th>
           <tr>
           <td>
           No
       </td>
       <td>
           Nama
       </td>
           </tr>
        </th>
        <tbody>
            ${renderData}
        </tbody>
    </table>`);
  },
    sum: (req, res) => {
        if(req.body.y && req.body.x) {
            res.status(200).json({
                status: true,
                message: "Parameters summarized!",
                data: { "x": req.body.x, "y": req.body.y, "result": req.body.x + req.body.y }
            })
        } else {
            res.status(400).json({
                 status: false,
                 message: req.body.y ? 'y kosong' : 'x kosong',
                 // DB
                 rupiah: 10000,
                // data: { "x": req.body.x, "y": req.body.y, "result": req.body.x + req.body.y }
            })
        }
       
    }
  }
  