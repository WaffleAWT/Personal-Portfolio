// Floating shapes data for each section
const shapesData = {
    about: [
        { type: "square", size: "small", direction: "1", hollow: false, style: "top: 15%; left: 10%;" },
        { type: "circle", size: "medium", direction: "2", hollow: true, style: "top: 60%; left: 20%;" },
        { type: "triangle", size: "large", direction: "3", hollow: false, style: "top: 30%; left: 80%;" },
        { type: "square", size: "medium", direction: "2", hollow: true, style: "top: 70%; left: 70%;" },
        { type: "circle", size: "small", direction: "1", hollow: false, style: "top: 20%; left: 40%;" },
        { type: "square", size: "large", direction: "3", hollow: true, style: "top: 5%; left: 25%;" },
        { type: "circle", size: "small", direction: "1", hollow: true, style: "top: 45%; left: 15%;" },
        { type: "triangle", size: "medium", direction: "2", hollow: false, style: "top: 55%; left: 55%;" },
        { type: "square", size: "small", direction: "4", hollow: true, style: "top: 25%; left: 65%;" },
        { type: "circle", size: "large", direction: "5", hollow: false, style: "top: 75%; left: 35%;" },
        { type: "triangle", size: "small", direction: "4", hollow: true, style: "top: 10%; left: 50%;" },
        { type: "square", size: "medium", direction: "5", hollow: false, style: "top: 40%; left: 85%;" },
        { type: "circle", size: "medium", direction: "3", hollow: true, style: "top: 85%; left: 60%;" },
        { type: "triangle", size: "large", direction: "4", hollow: false, style: "top: 35%; left: 30%;" },
        { type: "square", size: "large", direction: "5", hollow: true, style: "top: 50%; left: 75%;" },
        { type: "circle", size: "small", direction: "3", hollow: false, style: "top: 80%; left: 90%;" },
        { type: "triangle", size: "medium", direction: "4", hollow: true, style: "top: 15%; left: 5%;" },
        { type: "square", size: "small", direction: "5", hollow: false, style: "top: 65%; left: 45%;" },
        { type: "circle", size: "large", direction: "3", hollow: true, style: "top: 30%; left: 95%;" },
        { type: "triangle", size: "small", direction: "1", hollow: false, style: "top: 90%; left: 25%;" }
    ],
    projects: [
        { type: "square", size: "medium", direction: "3", hollow: true, style: "top: 10%; left: 15%;" },
        { type: "circle", size: "large", direction: "1", hollow: false, style: "top: 50%; left: 5%;" },
        { type: "triangle", size: "small", direction: "2", hollow: true, style: "top: 25%; left: 75%;" },
        { type: "square", size: "large", direction: "1", hollow: false, style: "top: 65%; left: 85%;" },
        { type: "circle", size: "medium", direction: "3", hollow: true, style: "top: 40%; left: 45%;" },
        { type: "square", size: "small", direction: "4", hollow: false, style: "top: 5%; left: 35%;" },
        { type: "circle", size: "medium", direction: "5", hollow: true, style: "top: 30%; left: 25%;" },
        { type: "triangle", size: "large", direction: "4", hollow: false, style: "top: 70%; left: 65%;" },
        { type: "square", size: "medium", direction: "5", hollow: true, style: "top: 20%; left: 55%;" },
        { type: "circle", size: "small", direction: "4", hollow: false, style: "top: 60%; left: 30%;" },
        { type: "triangle", size: "medium", direction: "5", hollow: true, style: "top: 15%; left: 90%;" },
        { type: "square", size: "large", direction: "4", hollow: false, style: "top: 45%; left: 70%;" },
        { type: "circle", size: "large", direction: "5", hollow: true, style: "top: 80%; left: 10%;" },
        { type: "triangle", size: "small", direction: "3", hollow: false, style: "top: 35%; left: 40%;" },
        { type: "square", size: "small", direction: "1", hollow: false, style: "top: 75%; left: 50%;" },
        { type: "circle", size: "medium", direction: "2", hollow: false, style: "top: 55%; left: 95%;" },
        { type: "triangle", size: "large", direction: "1", hollow: false, style: "top: 90%; left: 20%;" },
        { type: "square", size: "medium", direction: "3", hollow: false, style: "top: 25%; left: 3%;" },
        { type: "circle", size: "small", direction: "2", hollow: false, style: "top: 85%; left: 75%;" },
        { type: "triangle", size: "medium", direction: "1", hollow: false, style: "top: 5%; left: 60%;" }
    ],
    web: [
        { type: "square", size: "large", direction: "2", hollow: false, style: "top: 20%; left: 8%;" },
        { type: "circle", size: "small", direction: "3", hollow: true, style: "top: 70%; left: 15%;" },
        { type: "triangle", size: "medium", direction: "1", hollow: false, style: "top: 15%; left: 70%;" },
        { type: "square", size: "small", direction: "3", hollow: true, style: "top: 60%; left: 80%;" },
        { type: "circle", size: "medium", direction: "2", hollow: false, style: "top: 35%; left: 50%;" },
        { type: "square", size: "medium", direction: "4", hollow: true, style: "top: 10%; left: 30%;" },
        { type: "circle", size: "large", direction: "5", hollow: false, style: "top: 45%; left: 5%;" },
        { type: "triangle", size: "small", direction: "4", hollow: true, style: "top: 25%; left: 60%;" },
        { type: "square", size: "large", direction: "5", hollow: false, style: "top: 80%; left: 40%;" },
        { type: "circle", size: "medium", direction: "4", hollow: true, style: "top: 50%; left: 90%;" },
        { type: "triangle", size: "large", direction: "5", hollow: false, style: "top: 5%; left: 45%;" },
        { type: "square", size: "small", direction: "4", hollow: true, style: "top: 65%; left: 25%;" },
        { type: "circle", size: "small", direction: "5", hollow: false, style: "top: 30%; left: 75%;" },
        { type: "triangle", size: "medium", direction: "4", hollow: true, style: "top: 85%; left: 55%;" },
        { type: "square", size: "medium", direction: "5", hollow: false, style: "top: 40%; left: 20%;" },
        { type: "circle", size: "large", direction: "3", hollow: true, style: "top: 75%; left: 65%;" },
        { type: "triangle", size: "small", direction: "2", hollow: false, style: "top: 15%; left: 95%;" },
        { type: "square", size: "large", direction: "1", hollow: false, style: "top: 55%; left: 35%;" },
        { type: "circle", size: "medium", direction: "3", hollow: false, style: "top: 90%; left: 10%;" },
        { type: "triangle", size: "large", direction: "2", hollow: true, style: "top: 25%; left: 85%;" }
    ],
    contact: [
        { type: "square", size: "medium", direction: "3", hollow: false, style: "top: 15%; left: 12%;" },
        { type: "circle", size: "large", direction: "1", hollow: true, style: "top: 65%; left: 8%;" },
        { type: "triangle", size: "small", direction: "2", hollow: false, style: "top: 20%; left: 85%;" },
        { type: "square", size: "small", direction: "1", hollow: true, style: "top: 70%; left: 75%;" },
        { type: "circle", size: "medium", direction: "2", hollow: false, style: "top: 40%; left: 60%;" },
        { type: "square", size: "large", direction: "4", hollow: true, style: "top: 5%; left: 25%;" },
        { type: "circle", size: "small", direction: "5", hollow: false, style: "top: 55%; left: 30%;" },
        { type: "triangle", size: "medium", direction: "4", hollow: true, style: "top: 35%; left: 70%;" },
        { type: "square", size: "medium", direction: "5", hollow: false, style: "top: 80%; left: 15%;" },
        { type: "circle", size: "large", direction: "4", hollow: true, style: "top: 25%; left: 45%;" },
        { type: "triangle", size: "small", direction: "5", hollow: false, style: "top: 60%; left: 90%;" },
        { type: "square", size: "small", direction: "4", hollow: false, style: "top: 10%; left: 55%;" },
        { type: "circle", size: "medium", direction: "5", hollow: false, style: "top: 75%; left: 40%;" },
        { type: "triangle", size: "large", direction: "4", hollow: true, style: "top: 30%; left: 5%;" },
        { type: "square", size: "large", direction: "5", hollow: false, style: "top: 50%; left: 80%;" },
        { type: "circle", size: "small", direction: "3", hollow: false, style: "top: 85%; left: 65%;" },
        { type: "triangle", size: "medium", direction: "2", hollow: false, style: "top: 45%; left: 20%;" },
        { type: "square", size: "medium", direction: "1", hollow: true, style: "top: 95%; left: 50%;" },
        { type: "circle", size: "large", direction: "3", hollow: false, style: "top: 15%; left: 35%;" },
        { type: "triangle", size: "small", direction: "2", hollow: true, style: "top: 70%; left: 95%;" }
    ]
};

export default shapesData; 