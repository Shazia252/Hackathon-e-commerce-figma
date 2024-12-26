import React from 'react'
import Link from 'next/link'

const shop = () => {
  return (
    <div>
    {/* Page Header */}
  <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
  <div className="container md:w-[1170px] mx-auto px-4">
    <h1 className="text-3xl text-center md:text-left font-bold mb-4">Shop Grid Default</h1>
    <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
      <Link href="/">Home</Link>
      <span>•</span>
      <Link href="/pages">Pages</Link>
      <span>•</span>
      <span className="text-[#FB2E86]">shop Grid Default</span>
    </div>
  </div>
</div>
<h1 className="font-bold text-xlg text-center text-[#151875] mb-4 pt-10">
                Ecommerce Accessories & Fashion item</h1>
              <h4 className="text-[#8A8FB9] lg:text-start text-center md-4">
                About 9,620 results (0.62 seconds)</h4>
              <div className="text-lg mb-2">
              <label htmlFor="pages" className="p-2 text-[#182378]">Per Page:</label>
                <input id="pages" type="number" name="pages" defaultValue={1} required
                  className="border border-gray-300 lg:w-10 w-20 md:w-10 text-center p-1"/>
                </div>     
{/* <h3 className="text-[#151875] text-1xl md:text-2xl text-left font-medium mb-6 py-20">
Ecommerce Acceories & Fashion item</h3>
      <p className="text-1xl font-medium text-gray-500 mb-2 py-0">
      About 9,620 results (0.62 seconds)</p> */}

    <section className="text-gray-600 body-font">
   
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap m-4">
      <div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
      <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD1.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
        <div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
        <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/chairt3.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-1 font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>

  <div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD3.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD4.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD5.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD2.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD7.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD8.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD9.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD10.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD11.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/GD12.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/chair6.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/chair7.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
<div className="lg:w-1/5 md:w-1/3 p-4 w-full bg-gray-100 rounded-lg shadow-lg">
  <a className="relative h-64 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <img alt="Product description" className="object-contain w-2/3 h-2/3" src="/chair8.png"/>
  </a>
  <div className="mt-6 text-center">
    <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-1">Category</h3>
    <h2 className="text-[#151875] text-l font-medium">Vestibulum magna laoreet</h2>
    <p className="mt-2 text-lg font-bold text-[#182378]">$21.15</p>
  </div>
</div>
      </div>
    </div>
    <img className="flex justify-center item-center md:ml-[300px] lg:h-20 md:h-4 w-70" src="/transp.png" alt="img" />
   
  </section>
</div>
  )
}

export default shop
