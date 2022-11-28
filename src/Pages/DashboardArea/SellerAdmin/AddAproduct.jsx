import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AddAproduct = () => {
    // const image_host_key = process.env.REACT_APP_imgbb_key;
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
    }
    const selects = [
        "LUXURY WATCH",
        "SMART WATCH",
        "AVIATOR WATCH",
    ]

    const handlerSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const productName = form.productName.value;
        const condition = form.condition.value;
        const productLocation = form.productLocation.value;
        const price = form.price.value;
        const resalePrice = form.resalePrice.value;
        const phone = form.phone.value;
        const selection = form.selection.value;
        const meetingLocation = form.meetingLocation.value;
        const purchaseYear = form.purchaseYear.value;
        const yearsOfuse = form.yearsOfuse.value;
        const description = form.description.value;
        const photo = form.photo.value;


        const data = {
            sellerName: name,
            mail: user?.email,
            phone,
            price,
            resalePrice,
            condition,
            productLocation,
            productName,
            meetingLocation,
            purchaseYear,
            yearsOfuse,
            description,
            photo,
            name: selection,
            verified: true,
            postedTime: new Date().toLocaleDateString("en-US"),

        }

        fetch('http://localhost:5000/wathcCategories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                toast.success('your registration with login done')
                console.log(data)
            })

        form.reset()
        // console.log(data)
    }

    return (
        <div>
            <section className='mb-3'>
                <div className="dark:bg-gray-900">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center  md:py-12 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-orange-500">Add Product Here</h1>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 1440 200"><path fill="#111827" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,85.3C672,75,768,117,864,117.3C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </section>

            <section className='mb-20 lg:-mt-20 md:mt-10'>
                <div className='px-4 '>
                    <div className="  max-w-[600px] mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                        <h2 className="mb-3 text-3xl font-semibold text-orange-500 text-center">Submit Your Form</h2>
                        <form onSubmit={handlerSubmit} className="space-y-8 ng-untouched  ng-pristine ng-valid">
                            <section className='flex flex-wrap gap-x-6 justify-center'>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm text-orange-500 text-left">Your full Name</label>
                                        <input type="text" name="name" placeholder="your full name" readOnly defaultValue={user?.displayName} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm text-orange-500 text-left">Email address</label>
                                        <input type="email" name="email" placeholder="Email Address" readOnly defaultValue={user?.email} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm text-orange-500 text-left">Your Product Name</label>
                                        <input type="text" name="productName" placeholder="Your Product Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" required />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Choose your product Category?</label>
                                        </div>
                                        <select name='selection' className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 focus:dark:border-gray-300">
                                            {
                                                selects.map((select, i) => <option value={select} key={i}  >{select}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Original Price in $</label>
                                        </div>
                                        <input type="number" name="price" placeholder="Please provide Original Price" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Resale Price in $</label>
                                        </div>
                                        <input type="number" name="resalePrice" placeholder="Please provide Resale Price" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Product Condition</label>
                                        </div>
                                        <input type="text" name="condition" placeholder="Your Product Condition" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Your Location </label>
                                        </div>
                                        <input type="text" name="productLocation" placeholder="Your Location" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Your Meeting Location </label>
                                        </div>
                                        <input type="text" name="meetingLocation" placeholder="Your Meeting Location" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Year Of Purchace </label>
                                        </div>
                                        <input type="text" name="purchaseYear" placeholder="Year Of Purchace" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Year Of use </label>
                                        </div>
                                        <input type="numner" name="yearsOfuse" placeholder="Year Of use" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Phone</label>
                                        </div>
                                        <input type="text" name="phone" placeholder="Please provide Phone number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Your Product Photo Url</label>
                                        </div>
                                        <input type="text" name="photo" placeholder="Your Product Photo Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-sm text-orange-500">Description</label>
                                        </div>
                                        <textarea type="text" name="description" placeholder="Your Description" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-gray-300" ></textarea>
                                    </div>


                                </div>
                            </section>
                            <button type="submit " className="w-full px-8 py-3 rounded-md dark:bg-orange-400 font-bold dark:text-gray-900">Submit</button>
                        </form>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default AddAproduct; 