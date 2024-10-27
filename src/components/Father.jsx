import Son from "./son";
const Father = () => {
    let money= 1000//come from parent element
    return (
        <div>
            <h1>Father: I have {money-200}taka</h1>
            <Son money={money-200}/>
        </div>
    );
};

export default Father;