import React from 'react';
import './Header.css';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback} from '@uifabric/react-hooks';


function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const openPanel = useConstCallback(() => setIsOpen(true));
    const dismissPanel = useConstCallback(() => setIsOpen(false));

    return (
        <div className="headerContainer">
            <a  href="https://www.aka.ms/give" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + "./giveLogo.jpg"}
                alt="Give Logo"
                className= "headerImg" ></img>
            </a>
            <span className="headerText">Giving Campaign Calendar 2020</span>
            <DefaultButton text="FAQ's" className="headerButton" onClick={openPanel}/>
            <Panel
                isLightDismiss
                headerText="FAQ's"
                isOpen={isOpen}
                onDismiss={dismissPanel}
                hasCloseButton={false}
                className="panelStyle"
            >
                <p><strong> How do I get my events to show up in this calendar ? </strong></p>
                <p> Answer here</p>
                <br />
                <p><strong> I have already created an event. Why is it not showing up here ? </strong></p>
                <p> Answer here</p>
                <br />
                <p><strong> Why does all events show up as all day events ? </strong></p>
                <p> Answer here</p>
                <br />
                <p><strong> My event is not showing up under my SLT leader even after applying the filter </strong></p>
                <p> Answer here</p>
                <br />
                <p> <strong> I did not find the answer to my question in these FAQ's. What do I do ? </strong></p>
                <p> Please reach out to <strong>Soma(skrishna) or any of your LP's </strong> and they will be able to help</p>
                <br />
            </Panel>
        </div>
    )
}

export default Header;