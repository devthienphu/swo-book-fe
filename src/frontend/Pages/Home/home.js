import Courses from "../../components/Course/courses";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import VerticalHeader from "../../components/Header/VerticalHeader";

// import '../Home/home.css'
function Home () {
    return (
        <>
        <div className="flex flex-row ">
           <Header/>
            <VerticalHeader/>            
            <Courses/>
            
	    </div>
            <Footer/>
        
        </>
    );
}

export default Home;
