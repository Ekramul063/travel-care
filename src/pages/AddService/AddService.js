import React from 'react';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const from = event.target;
        const img = from.img.value;
        const title = from.title.value;
        const price = from.price.value;
        const duration = from.duration.value;
        const description = from.description.value;

        const services = {
            img, title, price, duration, description
        }

        console.log(img, title, price, duration, description);

        fetch('https://travel-care-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                from.reset();
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" w-full lg:w-1/2 flex-col my-16">

                    <form onSubmit={handleAddService} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input name='img' type="text" placeholder="Image URL" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Title</span>
                                </label>
                                <input name='title' type="text" placeholder="Service Title" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' type="text" placeholder="Price" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Duration</span>
                                </label>
                                <input name='duration' type="number" placeholder="Duration" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered" placeholder="Service Description"></textarea>

                            </div>



                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Service</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;
