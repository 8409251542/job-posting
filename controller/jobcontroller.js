const jobList = (req, res) => {
    try {
        return res.json({
            jobTitle: 'Insurance Consultant',
            company: 'CoverYou',
            location: 'Gurgaon',
            experience: '0-2 years',
            salary: '₹ 3,00,000 - 4,50,000'
        })
    } catch (error) {
        console.log("error Found:",error);
    }
}

const jobController={
    jobList
}

module.exports=jobController;