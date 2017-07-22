// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";
import Interactive from "../assets/interactive";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Layout,
  Fit,
  Fill,
  Text,
  S,
  CodePane,
  ComponentPlayground,
  Link,
  Appear,
  MarkdownSlides,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  pattern: require("../assets/react-pattern.png"),
  redux: require("../assets/redux-logo.png"),
  react: require("../assets/react-logo.svg"),
  bukalapak: require("../assets/bukalapak-logo.png"),
  mentosCoke: require("../assets/mentos-coke.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#6FE7DD",
  secondary: "#3490DE",
  tertiary: "#6639A6",
  quartenary: "#521262",
  redux: "#8800BE",
  react: "#00D8FF"
}, {
  primary: "Titillium Web",
  secondary: "Source Sans Pro",
  monospace: "monospace"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={600} theme={theme}>
        {/* TITLE */}
        <Slide transition={["spin"]} bgColor="white">
          <Image src={images.redux} width="20%"/>
          <Heading fit lineHeight={1} textFont="primary" textColor="redux" margin="0 0 100px 0">
            Redux Fundamentals
          </Heading>
          <Text textSize="24px" textColor="quartenary" textFont="secondary" bold>
            by
          </Text>
          <Text textSize="42px" textColor="quartenary" textFont="secondary" bold>
            Zain Fathoni
          </Text>
          <Text textSize="30px" textColor="tertiary" textFont="primary" bold margin="20px 0 10px 0">
            Software Engineer at
          </Text>
          <Image src={images.bukalapak} width="25%"/>
        </Slide>
        {/* OUTLINE */}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>Outline</Heading>
          <List>
            <ListItem>Why?</ListItem>
            <ListItem>Three Principles of Redux</ListItem>
            <ListItem>Actions</ListItem>
            <ListItem>Reducers</ListItem>
            <ListItem>Store</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Behind The Scene</ListItem>
            <ListItem>What's Next?</ListItem>
          </List>
        </Slide>
        {/* WHY? */}
        <Slide transition={["spin"]} width="100%" >
          <Heading size={2} textColor="quartenary" margin="0 0 50px 0" caps>Why?</Heading>
          <Layout>
            <Fill>
              <Appear fid="1">
                <Heading caps fit textColor="tertiary">Mutation +</Heading>
              </Appear>
              <Appear fid="2">
                <Heading caps fit textColor="tertiary" margin="8px 0">Asynchronicity</Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="3">
                <Heading size={4} caps textColor="tertiary" margin="13px 20px">Mentos</Heading>
              </Appear>
              <Appear fid="4">
                <Heading size={4} caps textColor="tertiary" margin="8px 20px">+ Coke</Heading>
              </Appear>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Appear fid="1">
                <Heading caps textColor="tertiary" margin="25px 0">=</Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="2">
                <Image src={images.mentosCoke}/>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} width="100%" bgColor="white" >
          <Heading size={1} textColor="react" margin="0 0 50px 0" caps>Solution</Heading>
          <Appear fid="1">
            <div>
              <Image src={images.react} width="25%"/>
              <Heading size={1} caps textColor="react">React</Heading>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.pattern.replace("/", "")} bgDarken={0.05}>
          <Heading size={1} textColor="secondary" margin="0 0 50px 0">But ...</Heading>
          <Appear fid="1">
            <Heading size={6} caps fit textColor="primary">Props Down</Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={6} caps fit textColor="primary">Actions Up</Heading>
          </Appear>
          <Appear fid="3">
            <Text textColor="primary">
              One of
              <Link href="https://hackernoon.com/10-react-mini-patterns-c1da92f068c5" target="_blank">
                <Text textColor="primary" bold>
                  <S type="underline">10 React Mini Patterns</S>
                </Text>
              </Link>
            </Text>
          </Appear>
        </Slide>
        {/* REACT PATTERN */}
        <CodeSlide
          textSize="18"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/react-pattern.code")}
          ranges={[
            { loc: [0, 4], title: "Real World Example", note: "Case Study: Intermediate Component" },
            { loc: [6, 16], title: "Received Props", note: "It takes (many) Props from Parent Component" },
            { loc: [130, 147], title: "PropTypes Definition", note: "Even one of those Props contains more (many) hidden Props" },
            { loc: [105, 121], title: "Passing Down Props", note: "Some of the hidden Props are destructured before being passed to the Children Components" },
            { loc: [76, 93], title: "Passing Down Props (Again)", note: "More Children Components, more passing down Props... :(" }
          ]}
        />
        <Slide transition={["slide"]} width="100%" bgColor="white" >
          <Heading size={1} textColor="quartenary" margin="0 0 50px 0" caps>Solution</Heading>
          <Layout>
            <Fill>
              <Appear fid="1">
                <div>
                  <Image src={images.react} width="25%"/>
                  <Heading size={1} caps textColor="react">React</Heading>
                </div>
              </Appear>
              <Appear fid="2">
                <Heading size={4} textColor="react">as View Layer</Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear fid="3">
                <div>
                  <Image src={images.redux} width="25%" margin="11px 0"/>
                  <Heading size={1} caps textColor="redux">Redux</Heading>
                </div>
              </Appear>
              <Appear fid="4">
                <Heading size={4} textColor="redux">as Data Layer</Heading>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        {/* THREE PRINCIPLES OF REDUX */}
        <Slide transition={["spin", "slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="quartenary" caps>Three Principles of</Heading>
          <Heading size={3} textColor="redux" caps margin="0 0 30px 0">Redux</Heading>
          <List>
            <ListItem>Single Source of Truth</ListItem>
            <ListItem>State is Read-Only</ListItem>
            <ListItem>Changes are Made with Pure Functions</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Single Source of Truth</Heading>
          <Layout>
            <Fit>
              <CodePane
                textSize="18"
                lang="js"
                source={require("raw-loader!../assets/first-principle.code")}
              />
            </Fit>
            <Fill>
              <List margin="20px 0 0 20px">
                <Appear fid="1">
                  <ListItem textColor="quartenary" textSize="30">One JavaScript object for the <S type="bold">entire state</S> of the application</ListItem>
                </Appear>
                <Appear fid="2">
                  <ListItem textColor="quartenary" textSize="30">All changes and mutations are <S type="bold">explicit</S></ListItem>
                </Appear>
                <Appear fid="3">
                  <ListItem textColor="quartenary" textSize="30">Easy to track <S type="bold">state changes</S> overtime</ListItem>
                </Appear>
                <Appear fid="4">
                  <ListItem textColor="quartenary" textSize="30">Easy to implement difficult features such as <S type="bold">Undo/Redo</S></ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">State is Read-Only</Heading>
          <Layout>
            <Fit>
              <CodePane
                textSize="18"
                lang="js"
                source={require("raw-loader!../assets/second-principle.code")}
              />
            </Fit>
            <Fill>
              <List margin="20px 0 0 20px">
                <Appear fid="1">
                  <ListItem textColor="quartenary" textSize="30">The state tree is <S type="bold">read only</S></ListItem>
                </Appear>
                <Appear fid="2">
                  <ListItem textColor="quartenary" textSize="30">Any time you want to change the state, you have to dispatch an <S type="bold">action</S></ListItem>
                </Appear>
                <Appear fid="3">
                  <ListItem textColor="quartenary" textSize="30">An action is a <S type="bold">plain JS object</S> describing the change</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">Changes are Made with</Heading>
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Pure Functions</Heading>
          <Layout>
            <Fit>
              <CodePane
                textSize="18"
                lang="js"
                source={require("raw-loader!../assets/third-principle.code")}
              />
            </Fit>
            <Fill>
              <List margin="20px 0 0 20px">
                <Appear fid="1">
                  <ListItem textColor="quartenary" textSize="30">Pure functions <S type="bold">don't have side effects</S> like network or database calls</ListItem>
                </Appear>
                <Appear fid="2">
                  <ListItem textColor="quartenary" textSize="30">Pure functions also <S type="bold">do not override the values</S> of anything</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Layout>
            <Fill>
              <Heading size={3} textColor="tertiary" caps>Pure Functions</Heading>
            </Fill>
            <Fit>
              <Heading size={4} textColor="tertiary">vs</Heading>
            </Fit>
            <Fill>
              <Heading size={3} textColor="tertiary" caps>Impure Functions</Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <CodePane
                textSize="18"
                lang="js"
                source={require("raw-loader!../assets/pure-functions.code")}
                margin="20px 20px 0 0"
              />
            </Fill>
            <Fill>
              <CodePane
                textSize="18"
                lang="js"
                source={require("raw-loader!../assets/impure-functions.code")}
                margin="20px 0 0 20px"
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide align="center center">
          <ComponentPlayground
            code={require("raw-loader!../assets/counter.code")}
          />
        </Slide>
        <Slide transition={["spin"]} width="100%" >
          <Heading size={2} textColor="quartenary" margin="0 0 50px 0" caps>Building Todo App</Heading>
        </Slide>
        <CodeSlide
          textSize="25"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/action-structure.code")}
          ranges={[
            { loc: [0, 6], title: "Action Structure" },
            { loc: [0, 1], title: "Action Structure", note: "Type Constant" },
            { loc: [3, 4], title: "Action Structure", note: "Action Type" },
            { loc: [4, 5], title: "Action Structure", note: "Action Payload (could be anything)" },
            { loc: [2, 6], title: "Action Structure", note: "Action Object" }
          ]}
        />
        <CodeSlide
          textSize="18"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/actions.code")}
          ranges={[
            { loc: [0, 31], title: "Actions" },
            { loc: [0, 3], title: "Actions", note: "Action Types" },
            { loc: [4, 9], title: "Actions", note: "Other Constants" },
            { loc: [10, 30], title: "Actions", note: "Action Creators" }
          ]}
        />
        <CodeSlide
          textSize="22"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/state-shape.code")}
          ranges={[
            { loc: [0, 13], title: "State Shape" },
            { loc: [1, 2], title: "State Shape", note: "Visibility Filter" },
            { loc: [2, 12], title: "State Shape", note: "Todos" }
          ]}
        />
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" caps margin="0 0 30px 0">Reducer Structure</Heading>
          <CodePane
            textSize="30"
            lang="js"
            source={require("raw-loader!../assets/reducer-structure.code")}
          />
          <Appear fid="1">
            <Text textColor="quartenary" textSize="20" margin="20px 0 0 0">
              Why is it called a <S type="bold">reducer</S>?
            </Text>
          </Appear>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">
            <Appear fid="2">
                <Text textColor="quartenary" textFont="monospace" textSize="20">
                  <S type="underline">Array.prototype.reduce(reducer, ?initialValue)</S>
                </Text>
            </Appear>
          </Link>
          <Appear fid="3">
            <Text textColor="quartenary" textSize="30" margin="30px 0 0 0">
              Things you should <S type="bold">never</S> do inside a reducer:
            </Text>
          </Appear>
          <List margin="20px 0 0 0">
            <Appear fid="1">
              <ListItem textColor="quartenary" textSize="30"><S type="bold">Mutate</S> its arguments</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem textColor="quartenary" textSize="30">Perform <S type="bold">side effects</S> like API calls and routing transitions</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem textColor="quartenary" textSize="30">Call <S type="bold">non-pure functions</S>, e.g. Date.now() or Math.random()</ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          textSize="25"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/todo-app-reducer.code")}
          ranges={[
            { loc: [12, 13], title: "Todo App Reducer" },
            { loc: [1, 4], title: "Todo App Reducer", note: "Import Action Types" },
            { loc: [4, 5], title: "Todo App Reducer", note: "Import Other Constants" },
            { loc: [7, 11], title: "Todo App Reducer", note: "Set Initial State" },
            { loc: [12, 13], title: "Todo App Reducer", note: "Accepts State & Action" },
            { loc: [13, 14], title: "Todo App Reducer", note: "Action Switch" },
            { loc: [39, 41], title: "Todo App Reducer", note: "Return the previous State in the default case" },
            { loc: [14, 18], title: "Set Visibility Filter Handler" },
            { loc: [15, 16], title: "Set Visibility Filter Handler", note: "Using Object.assign{} to avoid State mutation" },
            { loc: [16, 17], title: "Set Visibility Filter Handler", note: "Replace visibilityFilter's value with a new one" },
            { loc: [18, 28], title: "Add Todo Handler" },
            { loc: [19, 20], title: "Add Todo Handler", note: "Using Object.assign{} to avoid State mutation" },
            { loc: [21, 22], title: "Add Todo Handler", note: "Using Spread (...) operator to copy existing todos array elements" },
            { loc: [22, 26], title: "Add Todo Handler", note: "Add a new element at the end of todos array" },
            { loc: [28, 39], title: "Toggle Todo Handler" },
            { loc: [29, 30], title: "Toggle Todo Handler", note: "Using Object.assign{} to avoid State mutation" },
            { loc: [30, 31], title: "Toggle Todo Handler", note: "Using map to avoid todos mutation" },
            { loc: [31, 32], title: "Toggle Todo Handler", note: "Update todo element if the index matches" },
            { loc: [32, 35], title: "Toggle Todo Handler", note: "Using Object.assign{} (again) to avoid todo mutation" },
            { loc: [36, 37], title: "Toggle Todo Handler", note: "Return old todo element if the index doesn't match" }
          ]}
        />
        <CodeSlide
          textSize="16"
          transition={["fade"]}
          lang="jsx"
          code={require("raw-loader!../assets/reducer-composition.code")}
          ranges={[
            { loc: [40, 46], title: "Reducer Composition" },
            { loc: [1, 5], title: "Reducer Composition", note: "Imports, as usual" },
            { loc: [7, 15], title: "Visibility Filter Reducer" },
            { loc: [7, 8], title: "Visibility Filter Reducer", note: "Still accepts State & Action" },
            { loc: [7, 8], title: "Visibility Filter Reducer", note: "State is a Visibility Filter constant, with SHOW_ALL as the initial State" },
            { loc: [8, 9], title: "Visibility Filter Reducer", note: "Action Switch, as usual" },
            { loc: [11, 13], title: "Visibility Filter Reducer", note: "Return the previous State in the default case, as usual" },
            { loc: [9, 11], title: "Set Visibility Filter Handler" },
            { loc: [10, 11], title: "Set Visibility Filter Handler", note: "Only manage a slice of the state, hence not using Object.assign{} anymore" },
            { loc: [10, 11], title: "Set Visibility Filter Handler", note: "Directly replaces previous State with the action's payload instead" },
            { loc: [16, 39], title: "Todos Reducer" },
            { loc: [16, 17], title: "Todos Reducer", note: "Still accepts State & Action" },
            { loc: [16, 17], title: "Todos Reducer", note: "State is a todos array, with empty array as the initial State" },
            { loc: [17, 18], title: "Todos Reducer", note: "Action Switch, as usual" },
            { loc: [35, 37], title: "Todos Reducer", note: "Return the previous State in the default case, as usual" },
            { loc: [18, 26], title: "Add Todo Handler" },
            { loc: [19, 26], title: "Add Todo Handler", note: "Only manage a slice of the state, hence not using Object.assign{} anymore" },
            { loc: [20, 21], title: "Add Todo Handler", note: "Using Spread (...) operator to copy existing todos array elements" },
            { loc: [21, 25], title: "Add Todo Handler", note: "Add a new element at the end of todos array" },
            { loc: [26, 35], title: "Toggle Todo Handler" },
            { loc: [27, 28], title: "Toggle Todo Handler", note: "Only manage a slice of the state, hence not using Object.assign{} anymore" },
            { loc: [27, 28], title: "Toggle Todo Handler", note: "Using map to avoid todos mutation" },
            { loc: [28, 29], title: "Toggle Todo Handler", note: "Update todo element if the index matches" },
            { loc: [29, 32], title: "Toggle Todo Handler", note: "Using Object.assign{} (again) to avoid todo mutation" },
            { loc: [33, 34], title: "Toggle Todo Handler", note: "Return old todo element if the index doesn't match" },
            { loc: [40, 46], title: "Todo App Combined Reducers" },
            { loc: [40, 41], title: "Todo App Combined Reducers", note: "Still accepts State & Action" },
            { loc: [40, 41], title: "Todo App Combined Reducers", note: "State is an object, with an empty object as the initial State, since the initial State are determined in each reducer" },
            { loc: [41, 45], title: "Todo App Combined Reducers", note: "Returns a global State object, consists of 2 parts which are managed by their own reducers" },
            { loc: [42, 43], title: "Todo App Combined Reducers", note: "Visibility Filter part is determined by the Visibility Filter Reducer, by providing the part of the global State as the parameter" },
            { loc: [43, 44], title: "Todo App Combined Reducers", note: "Todos part is determined by the Todos Reducer, by providing the part of the global State as the parameter" }
          ]}
        />
        {/* SAMPLE SLIDES */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Link href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">
            <Text>
              You might not need Redux
            </Text>
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
          <Interactive/>
        </Slide>
         {
          MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
          `
        }
      </Deck>
    );
  }
}
