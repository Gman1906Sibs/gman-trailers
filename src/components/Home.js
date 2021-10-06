import { render } from '@testing-library/react';
import { useState } from 'react';
import Header from './Header';
import HomeContent from './HomeContent';
import SideBar from './SideBar';
import Latest from './Latest';
import Movies from './Movies';
import Series from './Series';
import MyList from './MyList';
import Settings from './Settings';

function Home() {

    const [selectedComponent, setSelectedComponent] = useState()
    // console.log(selectedComponent)

    return (
        <div className=" topOne relative ">
            <div className=" max-w-[1500px] absolute left-0 pl-[1px] ">
                <div className=" flex justify-evenly ">
                    <SideBar 
                        renderComponent ={setSelectedComponent}
                    />
                    <div className=" max-w-[1200px] flex-col ">
                        <Header className=" max-w-[1200px] "/>
                        { selectedComponent === "Settings" ?  <Settings /> :
                            selectedComponent === "Latest" ? <Latest /> :
                            selectedComponent === "Movies" ?  <Movies /> :
                            selectedComponent === "Series" ? <Series /> :
                            selectedComponent === "MyList" ? <MyList /> :
                            <HomeContent />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
