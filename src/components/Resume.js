import jenResume from '../assets/webResume.pdf';

function Resume(){
    return(
        <div>
            <iframe src={jenResume} title="Jennifer Li - Resume" width="100%" height="800px"></iframe>
        </div>
    )
}

export default Resume;