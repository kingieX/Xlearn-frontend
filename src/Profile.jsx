// import { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Navbar from './Components/Navbar'; 
import { useAuth } from './AuthContext'
import { useState, useEffect } from 'react';

const Profile = () => {
    // const [user, setUser] = useState(null);
    // const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { logout, userId, accessToken } = useAuth();
    const [userDetails, setUserDetails] = useState('');

    // fetch user details
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/users/${userId}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          const data = await response.json();
          setUserDetails(data);
          console.log(response);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };
  
      if (userId) {
        fetchUserDetails();
      }
    }, [userId, accessToken]);

  // handle logout
  const handleLogout = () => {
      // Call the logout function from the authentication context
      logout();

      navigate('/');
  }
  
    
  return (
    <>
    <Navbar />
        <div className="w-full">
        <MDBContainer className="h-100">
            <MDBRow className="justify-center items-center h-10">
            <MDBCol lg="" xl="">
                <MDBCard>
                {userDetails ? (
                  <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#552B8B', height: '200px' }}>
                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                      {/* <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                          alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} /> */}
                      <div className='img-thumbnail bg-purple-800 flex justify-center items-center rounded-md' style={{ width: '150px', height: '150px', zIndex: '1' }}>
                        <p className='text-white text-9xl font-medium'>{userDetails.username.charAt(0).toUpperCase()}</p>
                      </div>
                      </div>
                      <div className="ms-3" style={{ marginTop: '100px' }}>
                      <MDBTypography tag="h5" className='text-4xl font-semibold'>{userDetails.fullname}</MDBTypography>
                      <MDBCardText>Username: {userDetails.username}</MDBCardText>
                      <MDBCardText>Email: {userDetails.email}</MDBCardText>
                    </div>
                  </div>
                ) : (
                  <p>Loading Profile...</p>
                )}

                <MDBCardBody className="text-black p-4">
                    <div className="mb-5">
                    {/* <p className="lead fw-normal mb-1">About</p> */}
                      <div className="p-4 flex justify-between items-center text-white" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className='flex items-center gap-3 text-black'>
                          <h2 className='font-bold text-xl'>Courses:</h2>
                          <MDBCardText className="font-italic">Web Development</MDBCardText>
                          <MDBCardText className="font-italic">Data Analysis</MDBCardText>
                          <MDBCardText className="font-italic">Photography</MDBCardText>
                        </div>
                        <button 
                          className='btn-color px-2 py-2 rounded-xl hover:text-purple-700 hover:bg-white hover:border-2 hover:border-gray-300'
                          onClick={handleLogout}
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                    <MDBRow>
                    <MDBCol className="mb-2">
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1" className="w-100 rounded-3" />
                    </MDBCol>
                    <MDBCol className="mb-2">
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1" className="w-100 rounded-3" />
                    </MDBCol>
                    </MDBRow>
                    <MDBRow className="g-2">
                    <MDBCol className="mb-2">
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1" className="w-100 rounded-3" />
                    </MDBCol>
                    <MDBCol className="mb-2">
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1" className="w-100 rounded-3" />
                    </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
    </>
  )
}

export default Profile