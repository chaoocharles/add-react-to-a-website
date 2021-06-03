console.log(React);
console.log(ReactDOM);

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "React App"),
//     React.createElement(
//       "button",
//       { onClick: () => alert("Hello World") },
//       "Say Hello"
//     )
//   );
// };

// ReactDOM.render(React.createElement(App), document.querySelector("#root"));

// const Button = (props) => {
//   return <button onClick={() => alert(props.message)}>{props.text}</button>;
// };

// const App = () => {
//   return (
//     <div>
//       <h2>React App</h2>
//       <Button text="Say Hello" message="Hello World" />
//       <Button text="Like" message="You Liked" />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.querySelector("#root"));

const root = document.querySelector("#root");
const container = document.createElement("div");
const h2 = document.createElement("h2");
const button = document.createElement("button");
const button2 = document.createElement("button");

h2.innerText = "React App";
button.innerText = "Say Hello";
button2.innerText = "Like";

container.appendChild(h2);
container.appendChild(button);
container.appendChild(button2);

button.addEventListener("click", () => alert("Hello World"));
button2.addEventListener("click", () => alert("You Liked"));

document.body.onload = root.appendChild(container);
