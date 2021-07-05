import React from 'react';
import SolidButton from '../components/commons/buttons/SolidButton';

const HomeView = (props) => {
    return (
        <div>
            <h1>HomePage</h1>
            <p>{process.env.REACT_APP_ENV}</p>
            <SolidButton text="Default Button"  />
            <SolidButton text="primary Button" type="primary" />
            <SolidButton text="danger Button" type="danger" />
            <SolidButton text="success Button" type="success" />
        </div>
    )
}

export default HomeView;
