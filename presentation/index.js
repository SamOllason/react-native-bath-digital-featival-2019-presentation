// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    Notes,
    Quote,
    Slide,
    Text,
    Table,
    TableHeader,
    TableHeaderItem,
    TableRow,
    TableBody,
    TableItem,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
    formidagon: require('../assets/formidable-logo.svg'),
    goodWork: require('../assets/good-work.gif'),
    bridge: require('../assets/bridge.png'),
    XcodeSShot: require('../assets/XcodeSShot.png'),
    WebStormSShot: require('../assets/WebStormSShot.png'),
    pino: require('../assets/pino.jpg'),
    InterfaceBuilderStyling1: require('../assets/InterfaceBuilderStyling1.png'),
    InterfaceBuilderStyling2: require('../assets/InterfaceBuilderStyling2.png'),
    FlexBoxStyling: require('../assets/FlexboxStyling.png'),
    RNLogo: require('../assets/react-native-logo.png'),
    sponsor1: require('../assets/sponsor1.png'),
    sponsor2: require('../assets/sponsor2.png'),
    jsxExample: require('../assets/jsxExample.png'),


    firstSlide: require('../assets/firstSlide.png'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: 'whitesmoke',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
            >

                <Slide
                    transition={['slide']}
                    bgImage={images.firstSlide}
                    // bgDarken={0.75}
                >
                    {/*<Appear fid="1">*/}
                        <Heading size={1} caps textColor="primary">
                            Sam Ollason
                        </Heading>
                    <br/>
                    <br/>

                    {/*</Appear>*/}
                    {/*<Appear fid="2">*/}
                        <Heading size={5} textColor="primary">
                           Green13 Solutions
                        </Heading>
                    <br/>

                    {/*</Appear>*/}
                    {/*<Appear fid="3">*/}
                        <Heading size={5} textColor="secondary">
                            My experiences with React Native
                        </Heading>
                    <br/>
                    <br/>

                    {/*</Appear>*/}
                </Slide>


                {/*<Slide transition={['fade']} bgColor="primary">*/}
                {/*    <Heading size={1} fit caps lineHeight={1} textColor="secondary">*/}
                {/*        Sam Ollason*/}
                {/*    </Heading>*/}
                {/*    <br/>*/}
                {/*    /!*<Text margin="10px 0 0" textColor="tertiary" fit >*!/*/}
                {/*    /!*    Technical Lead at Green13 Solutions*!/*/}
                {/*    /!*</Text>*!/*/}
                {/*    <br/>*/}
                
                {/*    <Heading size={3} fit lineHeight={1} textColor="tertiary">*/}
                {/*        My experiences working with React Native*/}
                {/*    </Heading>*/}
                {/*    <br/>*/}
                
                {/*    <Heading size={4} lineHeight={1} textColor="secondary">*/}
                {/*        Bath Digital Festival 2019*/}
                {/*    </Heading>*/}
                
                {/*</Slide>*/}

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">
                        Me
                    </Heading>

                    <List>
                        <ListItem>Technical Lead at Green13 Solutions</ListItem>
                        <br/>
                        <ListItem>Manage development of user interfaces</ListItem>
                        <br/>
                        <ListItem>Research and development</ListItem>
                        <br/>
                        <ListItem>React, native iOS</ListItem>

                        {/*<ListItem bulletStyle="star">Item 1</ListItem>*/}
                        {/*<ListItem bulletStyle="cross">Item 2</ListItem>*/}
                        {/*<ListItem>Item 3</ListItem>*/}
                        {/*<ListItem>Item 4</ListItem>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">

                    <Heading size={2} textColor="secondary" caps>
                        Overview
                    </Heading>

                    <br/>
                    <br/>

                    <Heading size={5} textColor="secondary">
                        Refresher on React Native:
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary">
                        What it is and how it works
                    </Text>
                    {/*<List>*/}
                    {/*    <ListItem>What is it</ListItem>*/}
                    {/*    <br/>*/}
                    {/*    <ListItem>How it works</ListItem>*/}
                    {/*</List>*/}

                    <br/>
                    <br/>

                    <Heading size={5} textColor="secondary">
                        My Experiences:
                    </Heading>

                    <Text margin="10px 0 0" textColor="tertiary" fit>
                        Native iOS v React Native v React for the web
                    </Text>

                    {/*<List>*/}
                    {/*    <ListItem>Native iOS development</ListItem>*/}
                    {/*    <br/>*/}
                    {/*    <ListItem>Compared to React for the web</ListItem>*/}
                    {/*</List>*/}
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>React Native - an overview</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        React Native
                    </Heading>
                    <br/>
                    {/*<Heading size={5} textColor="secondary">*/}
                    {/*    What is it?*/}
                    {/*</Heading>*/}

                    <Image src={images.RNLogo} width={200} />

                    <List>
                        {/*<Appear>*/}
                            <ListItem>React: JavaScript library for building UIs</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                            <ListItem>React Native: JavaScript library for building cross-platform mobile apps</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                            <ListItem>Write once, run anywhere (almost)</ListItem>
                        {/*</Appear>*/}

                    </List>
                </Slide>

                {/*<Slide transition={['fade']} bgColor="primary" textColor="tertiary">*/}
                {/*    /!*<Heading size={3} textColor="secondary" caps>*!/*/}
                {/*    /!*    React Native*!/*/}
                {/*    /!*</Heading>*!/*/}
                {/*    /!*<br/>*!/*/}

                {/*    <Heading size={3} textColor="secondary">*/}
                {/*        How it works - rendering elements*/}
                {/*    </Heading>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <List>*/}
                {/*        <div>Diagram of how both React and RN use IR</div>*/}
                {/*    </List>*/}
                {/*</Slide>*/}

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        React Native
                    </Heading>
                    <br/>

                    <Heading size={6} textColor="secondary">
                        How it works - rendering elements
                    </Heading>
                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                            <ListItem>Same approach as React: UI components</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Image src={images.pino} width={500} />*/}
                        {/*<Appear>*/}
                            <ListItem bulletStyle="star"><b>Takeaway:</b> Same code (almost) as React for web projects</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        React Native
                    </Heading>
                    <br/>

                    <Heading size={6} textColor="secondary">
                        A real native app
                    </Heading>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Generates actual native UI modules</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem bulletStyle="star"><b>Takeaway:</b> User doesn't know its not a hybrid app!</ListItem>
                        {/*</Appear>*/}
                    </List>
                    <Image src={images.pino} width={400} />
                </Slide>

                {/*<Slide transition={['fade']} bgColor="primary" textColor="tertiary">*/}
                {/*    <Heading size={3} textColor="secondary" caps>*/}
                {/*        React Native*/}
                {/*    </Heading>*/}
                {/*    <br/>*/}
                {/*    <Heading size={6} textColor="secondary">*/}
                {/*        Communication*/}
                {/*    </Heading>*/}
                {/*    <br/>*/}

                {/*    <List>*/}
                {/*        /!*<Appear>*!/*/}
                {/*            <ListItem>Messages are sent across bridge</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*        <br/>*/}
                {/*        /!*<Appear>*!/*/}
                {/*            <Image src={images.bridge} width={800} />*/}
                {/*        /!*</Appear>*!/*/}
                {/*        <br/>*/}
                {/*        /!*<Appear>*!/*/}
                {/*            <ListItem bulletStyle="star"><b>Takeaway:</b> (generally) only deal with React/JS code ... no native code!</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*    </List>*/}
                {/*</Slide>*/}

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Comparison areas
                    </Heading>

                    <br/>

                    <List>
                        {/*<Appear>*/}
                            <ListItem>Language</ListItem>
                        {/*</Appear>*/}

                        {/*<Appear>*/}
                        {/*    <ListItem>Development Environment</ListItem>*/}
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                            <ListItem>Tooling and Infrastructure</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                            <ListItem>UI Styling</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                            <ListItem>Connecting UI elements to logic</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                            <ListItem>Project Roadmap</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                            <ListItem>Publishing</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                            <ListItem>Bugs and support</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Language</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Language
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Writing in React ... for native apps</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>'Almost' identical, so shallow learning curve</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Some React Native pre-made components easier to work with than React</ListItem>
                        {/*</Appear>*/}
                    </List>


                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Language
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS App
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Swift (or Objective-C...)</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Type checking, type inference</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Easy to learn to start with, but then some challenges</ListItem>
                        {/*</Appear>*/}
                        {/*<div>Optionals image?</div>*/}
                    </List>
                </Slide>


                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        Language
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Swift > React Native (JavaScript)</ListItem>
                        {/*</Appear>*/}
                        <br/>

                        {/*<Appear>*/}
                        <ListItem>Swift > React for web (JavaScript)</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>React Native > React for web</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem bulletStyle="star"><b>Swift has a best developer experience</b></ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                {/*<Slide transition={['fade']} bgColor="primary" textColor="tertiary">*/}
                {/*    <Heading size={4} textColor="secondary" caps>*/}
                {/*        Development Ecosystem*/}
                {/*    </Heading>*/}

                {/*    <br/>*/}

                {/*    <Heading size={6} textColor="secondary" caps>*/}
                {/*        Native iOS*/}
                {/*    </Heading>*/}

                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <List>*/}
                {/*        /!*<Appear>*!/*/}
                {/*        <ListItem>Xcode</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*        <br/>*/}
                {/*        /!*<Appear>*!/*/}
                {/*        <ListItem>Powerful and sophisticated</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*        <br/>*/}

                {/*        /!*<Appear>*!/*/}
                {/*        <ListItem>...but too dense and cluttered</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*    </List>*/}
                {/*</Slide>*/}

                {/*<Slide transition={['fade']} bgColor="primary" textColor="tertiary">*/}
                {/*    <Heading size={3} textColor="secondary" caps>*/}
                {/*        Dev Environment*/}
                {/*    </Heading>*/}

                {/*    <br/>*/}

                {/*    <Heading size={6} textColor="secondary">*/}
                {/*        React Native*/}
                {/*    </Heading>*/}

                {/*    <br/>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <List>*/}
                {/*        /!*<Appear>*!/*/}
                {/*        <ListItem>Using WebStorm, same as React</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*        <br/>*/}
                {/*        /!*<Appear>*!/*/}
                {/*        <ListItem>Feels 'lighter' and less cluttered</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*    </List>*/}
                {/*</Slide>*/}

                {/*<Slide transition={['fade']} bgImage={images.WebStormSShot}/>*/}
                {/*<Slide transition={['fade']} bgImage={images.XcodeSShot}/>*/}

                {/*<Slide transition={['fade']} bgColor="primary" textColor="tertiary">*/}
                {/*    <Heading size={3} textColor="secondary" caps>*/}
                {/*        Dev Environment*/}
                {/*    </Heading>*/}

                {/*    <br/>*/}

                {/*    <Heading size={6} textColor="secondary">*/}
                {/*        Summary*/}
                {/*    </Heading>*/}

                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <List>*/}
                {/*        /!*<Appear>*!/*/}
                {/*            <ListItem bulletStyle="star">React Native === React</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*        <br/>*/}
                {/*        /!*<Appear>*!/*/}
                {/*            <ListItem bulletStyle="star">React Native > Native iOS</ListItem>*/}
                {/*        /!*</Appear>*!/*/}
                {/*    </List>*/}
                {/*</Slide>*/}


                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Tooling and Infrastructure</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Tooling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>IDE: Xcode, Emulators: Xcode</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Swift for iOS apps compiled</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Slow and frustrating for quick iterations</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Tooling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>IDE: WebStorm, Emulators: Xcode</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Hot reloading</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        {/*<ListItem>Slow and frustrating for quick iterations</ListItem>*/}
                        {/*</Appear>*/}
                    </List>
                </Slide>

                {/*<Slide transition={['fade']} bgImage={images.WebStormSShot}/>*/}

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        Tooling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Same emulator experience</ListItem>
                        {/*</Appear>*/}
                        <br/>

                        {/*<Appear>*/}
                        <ListItem>Hot reloading beats compilation</ListItem>
                        <br/>

                        {/*</Appear>*/}
                        <ListItem bulletStyle="star">React native > Native iOS</ListItem>
                        <ListItem bulletStyle="star">React native > Native iROS</ListItem>
                        <br/>

                        <ListItem bulletStyle="star">React native same as React for the web</ListItem>

                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>UI Styling</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        UI Styling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Xcode Interface Builder</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Initially enjoyed the fine-grained control</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>In the end found cluttered and frustrating</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.XcodeSShot}/>

                {/*<Slide transition={['fade']} bgImage={images.InterfaceBuilderStyling1}/>*/}
                <Slide transition={['fade']} bgImage={images.InterfaceBuilderStyling2}/>

                <Slide>
                    <Image src={images.InterfaceBuilderStyling1} width={500} />
                    <Notes>Screenshot of Xcode Interface Builder controlling layout</Notes>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        UI Styling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Programmatically style w/ FlexBox + CSS</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Very similar to React</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Handles resizing automatically</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        {/*<ListItem>React Native 'modals' vs React 'Portals'</ListItem>*/}
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.FlexBoxStyling}/>

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        UI Styling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>React Native the same as React for the web</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>React Native > Native iOS</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}

                        <ListItem bulletStyle="star">React native the easiest</ListItem>
                        {/*</Appear>*/}
                    </List>

                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>UI and logic</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        UI and Logic
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>MVC paradigm</ListItem>
                        <br/>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>View: storyboard area</ListItem>
                        <br/>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>Controller: Swift source file</ListItem>
                        <br/>
                        {/*</Appear>*/}

                        {/*image????*/}
                        {/*<Appear>*/}
                        <ListItem>Make sure appropriate files open/closed</ListItem>
                        <br/>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>Make sure 'connections' deleted properly</ListItem>
                        <br/>
                        {/*</Appear>*/}

                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.XcodeSShot}/>

                {/*<Slide transition={['fade']} bgColor="primary" textColor="tertiary">*/}
                {/*    <Heading size={3} textColor="secondary" caps>*/}
                {/*        UI and Logic*/}
                {/*    </Heading>*/}

                {/*    <br/>*/}

                {/*    <Heading size={6} textColor="secondary">*/}
                {/*        Native iOS*/}
                {/*    </Heading>*/}

                {/*    <br/>*/}
                {/*    <br/>*/}

                {/*    <div>Example of drag and drop</div>*/}
                {/*</Slide>*/}

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        UI and Logic
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Markup and logic all in one file</ListItem>
                        <br/>

                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>Markup with JSX</ListItem>
                        <br/>

                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>JSX: <i>"combining markup and JavaScript"</i></ListItem>
                            {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.jsxExample}/>


                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        UI and Logic
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem bulletStyle="star">React Native > native iOS</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem bulletStyle="star">React Native === React for the web</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Project Roadmap</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Project Roadmap
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Two choices: Expo CLI vs 'React Native CLI'</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Not always clear at which to pick</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Lots of community approaches to projects</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Project Roadmap
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Clearly linear learning path</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem><i>The</i> Apple way of doing things</ListItem>
                        {/*</Appear>*/}
                        <br/>

                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Project Roadmap
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem bulletStyle="star">Preferred guided nature of native iOS</ListItem>
                        {/*<ListItem bulletStyle="star">Less breaking changes in React than RN</ListItem>*/}
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Publishing</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    {/*<Heading size={3} textColor="secondary" caps>*/}
                    {/*    Publishing*/}
                    {/*</Heading>*/}
                
                    <br/>
                
                    <Heading size={4} textColor="secondary">
                        React Native: React Native CLI
                    </Heading>
                
                    <br/>
                    <br/>
                
                    <List>
                        {/*<Appear>*/}
                        <ListItem>Open Xcode project - then its the same as a native release</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>
                
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    {/*<Heading size={4} textColor="secondary" caps>*/}
                    {/*    Publishing*/}
                    {/*</Heading>*/}
                
                    <br/>
                
                    <Heading size={4} textColor="secondary">
                        React Native: Expo CLI
                    </Heading>
                
                    <br/>
                    <br/>
                
                    <Heading size={6} textColor="secondary">
                        Initial release
                    </Heading>
                
                    <List>
                        {/*<Appear>*/}
                        <ListItem>Bundle, upload with Apple desktop tool</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>App agnostic at and beyond this point</ListItem>
                        {/*</Appear>*/}
                
                    </List>
                
                
                    <br/>
                
                    <Heading size={6} textColor="secondary">
                        Updates
                    </Heading>
                
                    <List>
                        <ListItem>Over the air updates - bypass App Store</ListItem>
                    </List>
                </Slide>
                
                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        Publishing
                    </Heading>
                
                    <br/>
                
                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>
                
                    <br/>
                    <br/>
                
                    <List>
                        {/*<Appear>*/}
                        <ListItem>React Native CLI === Native iOS</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Expo CLI > Native iOS (from what I've read)</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Bugs and support</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={4} textColor="secondary" caps>
                        Bugs and Support
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Lots of moving parts</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Breaking changes between versions</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={4} textColor="secondary" caps>
                        Bugs and Support
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Easier than React Native to find solutions as bigger community</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Still lots of moving parts</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={4} textColor="secondary" caps>
                        Bugs and Support
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Easy to find solution</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Often clear if it was best practice or or not</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={4} textColor="secondary" caps>
                        Bugs and Support
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem bulletStyle="star">Native iOS > React for the web</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem bulletStyle="star">React for the web > React Native</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        Overall
                    </Heading>

                    <br/>
                    <br/>


                    <Table>
                        {/*<TableHeader>*/}
                        {/*    <TableRow>*/}
                        {/*        <TableHeaderItem>Comparison</TableHeaderItem>*/}
                        {/*        <TableHeaderItem>Area</TableHeaderItem>*/}
                        {/*    </TableRow>*/}
                        {/*</TableHeader>*/}
                        <TableBody>
                            {/*<Appear>*/}
                            <TableRow>
                                <TableItem>Language:</TableItem>
                                <TableItem>Native iOS (Swift)</TableItem>
                            </TableRow>
                            {/*</Appear>*/}
                            <br/>

                            {/*<Appear>*/}
                            <TableRow>
                                <TableItem>Tooling and Infrastructure:</TableItem>
                                <TableItem>React Native</TableItem>
                            </TableRow>
                            {/*</Appear>*/}
                            <br/>

                            <TableRow>
                                <TableItem>UI Styling:</TableItem>
                                <TableItem>React Native</TableItem>
                            </TableRow>
                            <br/>

                            {/*<br/>*/}

                            <TableRow>
                                <TableItem>UI connecting to Logic:</TableItem>
                                <TableItem>React Native</TableItem>
                            </TableRow>
                            <br/>




                            {/*<Appear>*/}
                            <TableRow>
                                <TableItem>Project Roadmap:</TableItem>
                                <TableItem>Native iOS</TableItem>
                            </TableRow>
                            {/*</Appear>*/}
                            <br/>

                            {/*<Appear>*/}
                            <TableRow>
                                <TableItem>Publishing:</TableItem>
                                <TableItem>React Native</TableItem>
                            </TableRow>
                            {/*</Appear>*/}
                            <br/>

                            {/*<Appear>*/}
                            <TableRow>
                                <TableItem>Support:</TableItem>
                                <TableItem>Native iOS</TableItem>
                            </TableRow>
                            {/*</Appear>*/}
                        </TableBody>
                    </Table>

                    <br/>
                    <br/>

                    {/*<div>Key:</div>*/}
                    {/*<div>RW: "React for the web"</div>*/}
                    {/*<div>RN: "React Native"</div>*/}
                    {/*<div>Expo: "Expo CLI"</div>*/}
                    {/*<div>RN-CLI: "React Native CLI"</div>*/}
                    {/*<div>NiOS: "Native iOS Native"</div>*/}


                    {/*<ListItem bulletStyle="star"><b>Language:</b> Native iOS >> React native === React for the web</ListItem>*/}
                    {/*<ListItem bulletStyle="star"><b>Development ecosystem:</b> React Native === React for the web > Native iOS </ListItem>*/}
                    {/*<ListItem bulletStyle="star"><b>Development tooling:</b> React Native === React for the web > Native iOS </ListItem>*/}
                    {/*<ListItem bulletStyle="star"><b>UI elements styling</b> React Native === React for the web > Native iOS </ListItem>*/}
                    {/*<ListItem bulletStyle="star"><b>UI elements styling</b> React Native === React for the web > Native iOS </ListItem>*/}


                </Slide>


                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={2} textColor="secondary" caps>
                        Resources
                    </Heading>

                    <br/>

                    {/*<Heading size={6} textColor="secondary">*/}
                    {/*    Native iOS*/}
                    {/*</Heading>*/}

                    <br/>
                    <br/>

                    <List>
                        <ListItem><a href="https://medium.com/@sam_ollason/react-native-vs-swift-ios-c144496f1519" target="_blank">Article</a> by Sam Ollason on Medium</ListItem>
                        <ListItem><a href="https://github.com/SamOllason" target="_blank">Github</a></ListItem>
                        <ListItem>Created with <a href="https://github.com/FormidableLabs/spectacle/blob/master/README.md" target="_blank">Spectacle</a> ... using React!!!</ListItem>
                        <ListItem>Slides online</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.sponsor1}/>
                <Slide transition={['fade']} bgImage={images.sponsor2}/>


                {/*<Slide transition={['fade']} bgColor="tertiary">*/}
                {/*    <Heading size={6} textColor="primary" caps>*/}
                {/*        Typography*/}
                {/*    </Heading>*/}
                {/*    <Heading size={1} textColor="secondary">*/}
                {/*        Heading 1*/}
                {/*    </Heading>*/}
                {/*    <Heading size={2} textColor="secondary">*/}
                {/*        Heading 2*/}
                {/*    </Heading>*/}
                {/*    <Heading size={3} textColor="secondary">*/}
                {/*        Heading 3*/}
                {/*    </Heading>*/}
                {/*    <Heading size={4} textColor="secondary">*/}
                {/*        Heading 4*/}
                {/*    </Heading>*/}
                {/*    <Heading size={5} textColor="secondary">*/}
                {/*        Heading 5*/}
                {/*    </Heading>*/}
                {/*    <Text size={6} textColor="secondary">*/}
                {/*        Standard text*/}
                {/*    </Text>*/}
                {/*</Slide>*/}
                
                {/*<Slide transition={['fade']} bgColor="primary" textColor="tertiary">*/}
                {/*    <Heading size={6} textColor="secondary" caps>*/}
                {/*        Standard List*/}
                {/*    </Heading>*/}
                {/*    <List>*/}
                {/*        <ListItem bulletStyle="star">Item 1</ListItem>*/}
                {/*        <ListItem bulletStyle="cross">Item 2</ListItem>*/}
                {/*        <ListItem>Item 3</ListItem>*/}
                {/*        <ListItem>Item 4</ListItem>*/}
                {/*    </List>*/}
                {/*</Slide>*/}
                
                {/*<Slide transition={['fade']} bgColor="secondary" textColor="primary">*/}
                {/*    <BlockQuote>*/}
                {/*        <Quote>Example Quote</Quote>*/}
                {/*        <Cite margin="10px 0 0 30px">Author</Cite>*/}
                {/*    </BlockQuote>*/}
                {/*</Slide>*/}
                
                {/*<Slide>*/}
                {/*    <Image src={images.goodWork} width={500} />*/}
                {/*    <Notes>gifs work too</Notes>*/}
                {/*</Slide>*/}

            </Deck>
        );
    }
}
