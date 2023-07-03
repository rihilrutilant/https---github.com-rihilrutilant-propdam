import React, { useEffect , useState} from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../Style/CustomerService.css";
import axios from "axios";
import apiConst from "../ApiKeys";
const CustomerService = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      subject: subject,
      mobile: mobile
    };

    axios.post(apiConst, formData)
      .then(response => {
        console.log('Data submitted successfully',response.data);
        // Perform any additional actions or show success message
      })
      .catch(error => {
        console.error('Failed to submit data',error);
        // Handle error or show error message
      });
  };

  return (
    <>
      <Navbar />
      <section className="container-fluid">
        <form onSubmit={handleSubmit}>
        <div className="customerCard">
          <div className="first_input">
            <input type="text" placeholder="Name"  name="name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="second_input">
            <input type="text" placeholder="Subject" name="subject" onChange={(e) => setSubject(e.target.value)} />
            <input type="number" placeholder="Mobile" name="mobile" onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div className="message">
            <textarea
              id="w3review"
              name="w3review"
              rows="8"
              cols="50"
              placeholder="Write Message"
            ></textarea>
          </div>
          <div className="msgBtn">
            <button>SEND MESSAGE</button>
          </div>
        </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default CustomerService;
