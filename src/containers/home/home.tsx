import * as React from 'react'
import './home.css';


interface HomeProps {
    state?: string;
}

interface HomeState {
    prop?: string;
}

class Home extends React.Component<HomeProps, HomeState>{

    public render() {
        return (
            <div>home</div>
        )
    }

}

export default Home;