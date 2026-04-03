type ProfileCardType = {
    Name?: string;
    Birth: number;
    // for optional value
    Job?: string;
    Key: number;
};

const ProfileCard = (props: ProfileCardType) => {
    // const Name = "Leonardo";
    // const Birth = "3 August 2000";
    // const Job = "Software Engineer";

    // BEST WAY: 
    const {Name, Birth, Job} = props
    
    return (
        // inline styling jsx itu bentuknya OBJECT bukan string!
        // kalau html itu bentuknya baru STRING!
        <div className = "card">
            {/* kalau tanpa default value "Name" di const ProfileCard, maka bisa bikin DV nya sperti ini:*/}
            {/* <p>Name: {Name || "Arema"} </p> */}
            <p>Name: {Name}</p>
            <p>Birth Year: {Birth}</p>
            {/* IF-Ternary (operator) di "Job" itu gini casenya: */}
            {/* {Job ? <p>Job: {Job}</p>: null} */}
            
            {/*  BEST WAY: kalau tanpa props 1/1 di object, maka bisa di call seperti ini: */}
            {Job && <p>Job: {Job}</p>}
        </div>
    );
};

export default ProfileCard;