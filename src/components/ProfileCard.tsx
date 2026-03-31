type ProfileCardType = {
    Name: string;
    Birth: number;
    Job: string;
};

const ProfileCard = (props: ProfileCardType) => {
    // const Name = "Leonardo";
    // const Birth = "3 August 2000";
    // const Job = "Software Engineer";
    
    return (
        // inline styling jsx itu bentuknya OBJECT bukan string!
        // kalau html itu bentuknya baru STRING!
        <div className = "card">
            <p>Name: {props.Name}</p>
            <p>Birth: {props.Birth}</p>
            <p>Job: {props.Job}</p>
        </div>
    );
};

export default ProfileCard;