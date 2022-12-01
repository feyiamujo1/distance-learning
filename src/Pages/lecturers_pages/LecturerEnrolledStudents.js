import React from 'react'

function LecturerEnrolledStudents() {

    // const [productItems, setProductItems] = useState([])
    // const [statusNote, setStatusNote] = useState("")
    // const url = 'https://fakerapi.it/api/v1/products?_quantity=15'

    // useEffect(() => {
    // axios.get(url)
    // .then(response => {
    // if(response.status === 200){
    //     setStatusNote("")
    //     setProductItems(response.data.data)
    // }else{
    //     setStatusNote("Error while loading data, please refresh the page")
    // }
    // })
//   }, [])
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-4'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold '>Enrolled Students</h1>
                <p className='text-sm text-black'>Total: 4</p>
            </div>
            <div>
                {/* <table className='product_table'>
                    <tr className='product_table_tr table_heading'>
                        <th className='product_th'>No</th>
                        <th className='product_th'>Product </th>
                        <th className='product_th net_price_heading'>Net Price (&#8358;)</th>
                        <th className='product_th taxes_heading'>Taxes (%)</th>
                        <th className='product_th'>Price (&#8358;)</th>
                    </tr>
                    {
                        productItems ? productItems.map((productItem, id )=> (
                        <tr key={id} className='product_table_tr table_item'>
                        <td>{id+1}</td>
                        <td className='products_card_image'>
                        <img src={productItem.image} alt="product" />
                        <span>{productItem.name}</span>
                        </td>
                        <td className='net_price'>{productItem.net_price}</td>
                        <td className='taxes'>{ productItem.taxes} </td>
                        <td className='price'>{productItem.price}</td>  
                        </tr>
                        ) )
                        : null
                    }
                </table> */}
            </div>
        </div>
    </div>
  )
}

export default LecturerEnrolledStudents