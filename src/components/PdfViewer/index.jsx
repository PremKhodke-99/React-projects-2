import React, { useEffect, useState } from 'react'
import './pdf.css'
import { Document, Page, PDFDownloadLink, PDFViewer, Text, View } from '@react-pdf/renderer';

function PdfViewComponent({ productDetails }) {
    return <Document>
        <Page>
            <View>
                <Text>
                    {productDetails?.title}
                </Text>
                <Text>
                    {productDetails?.description}
                </Text>
            </View>
        </Page>
    </Document>
}

function PdfViewer() {

    const [products, setProducts] = useState();
    const [productDetails, setProductDetails] = useState(null);

    async function fetchListOfProducts() {
        const response = await fetch('https://dummyjson.com/products?limit=10&skip=0');
        const result = await response.json();

        if (result?.products?.length) {
            setProducts(result.products);
        }
    }

    useEffect(() => {
        fetchListOfProducts()
    }, [])

    async function handleFetchProductDetails(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();

        if (response) setProductDetails(result);
    }
    return (
        <div className='pdf-view-container'>
            <h1>PDF Viewer</h1>
            <ul>
                {
                    products?.length > 0 && products.map(productItem => (<li onClick={() => handleFetchProductDetails(productItem.id)} key={productItem.id}>{productItem.title}</li>))
                }
            </ul>
            <div className='pdf-viewer-page'>
                <PDFViewer style={{ width: '100%', height: '300px' }}>
                    <PdfViewComponent productDetails={productDetails} />
                </PDFViewer>
            </div>
            <PDFDownloadLink
                fileName={`${productDetails?.title}.pdf`}
                document={<PdfViewComponent productDetails={productDetails}
                />}
            >
                <button>Download PDF</button>
            </PDFDownloadLink>
        </div>
    )
}

export default PdfViewer