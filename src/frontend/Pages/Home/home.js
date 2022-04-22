import Courses from "../../components/Course/courses";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Schedule from "../../components/Schedule/schedule";
// import '../Home/home.css'
function Home () {
    return (
        <>
        <div className="flex flex-row ">
            {/* <div className="basis-1/4"><Header/></div>
            <div className="basis-1/3"> <Course/></div>

            <div className="basis-1/4"><Schedule/></div> */}

           
            <Header/>
            
            <Courses/>
            <Schedule/>
            
	    </div>
            <Footer/>
        
        </>
    );
}

export default Home;
