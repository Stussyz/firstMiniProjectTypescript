const ProfileCard = () => {
    return (
        // inline styling jsx itu bentuknya OBJECT bukan string!
        // kalau html itu bentuknya baru STRING!
        <div className = "card">
            <p>Name: Adoleo</p>
            <p>Birth: 3 August 00</p>
            <p>Job: Software Engineer</p>
        </div>
    );
};

export default ProfileCard;