export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">TextArea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="text here!" rows="3"></textarea>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto" data-aos="zoom-in" data-aos-duration="1000">
                    <button class="btn btn-danger" type="button">Button</button>
                </div>

            </div>


        </>
    )
}