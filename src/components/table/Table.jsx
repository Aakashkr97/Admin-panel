
import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id:132256,
            product: "Boss Nitro 5",
            img: "https://thetechhacker.com/wp-content/uploads/2021/11/Are-electronic-Gadgets-Good-for-us-Or-are-they-Bad.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 5700,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id:479028,
            product: "Sony PS4 Playstation",
            img: "https://m.media-amazon.com/images/I/61fKcfMw5qS._AC_SL1304_.jpg",
            customer: "Raj Kapoor",
            date: "1 March",
            amount: 2400,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id:759033,
            product: "KUU PC XBOOK-3",
            img: "https://i.ebayimg.com/images/g/CCIAAOSwoYJldU1X/s-l1200.webp",
            customer: "Bill Villy",
            date: "1 March",
            amount: 1488,
            method: "Online",
            status: "Approved",
        },
        {
            id:202256,
            product: "Apple trxx 7",
            img: "https://m.media-amazon.com/images/I/61fKcfMw5qS._AC_SL1304_.jpg",
            customer: "Willium Soks",
            date: "1 March",
            amount: 2300,
            method: "Onine",
            status: "Pending",
        },
        {
          id:202256,
          product: "Asus Rog strix",
          img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/n/2/n/-original-imagqfxrg76yafrr.jpeg?q=90&crop=false",
          customer: "Willium Soks",
          date: "1 March",
          amount: 1700,
          method: "Onine",
          status: "Approved",
      },{
        id:202256,
        product: "Asus Rog strix",
        img: "https://thetechhacker.com/wp-content/uploads/2021/11/Are-electronic-Gadgets-Good-for-us-Or-are-they-Bad.jpg",
        customer: "Willium Soks",
        date: "1 March",
        amount: 2700,
        method: "Onine",
        status: "Approved",
    },{
      id:202256,
      product: "Asus Rog strix",
      img: "https://i.ebayimg.com/images/g/CCIAAOSwoYJldU1X/s-l1200.webp",
      customer: "Willium Soks",
      date: "1 March",
      amount: 3100,
      method: "Onine",
      status: "Pending",
  },
    ]
  return (
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>Trackig ID</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Customer </TableCell>
          <TableCell className='tableCell'>Date </TableCell>
          <TableCell className='tableCell'>Amount </TableCell>
          <TableCell className='tableCell'>Payment Method </TableCell>
          <TableCell className='tableCell'>Status </TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id} >
            <TableCell> {row.id} </TableCell>
            <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image' />
                    {row.product}
                </div>
            </TableCell>
            <TableCell className='tableCell'>{row.customer}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.amount}</TableCell>
            <TableCell className='tableCell'>{row.method}</TableCell>
            <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List;