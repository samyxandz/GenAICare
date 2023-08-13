import pickle
import streamlit as st
from streamlit_option_menu import option_menu
from PIL import Image

img = Image.open('image.png')
st.set_page_config(page_title = 'med', page_icon = img)


# loading the saved models

diabetes_model = pickle.load(open(
    'C:/Users/dassu/Desktop/Multi Disease Detection Using ML/Diabetes/trained_model.sav', 'rb'))

heart_disease_model = pickle.load(open(
    'C:/Users/dassu/Desktop/Multi Disease Detection Using ML\Heart Disease/heart_disease_model.sav', 'rb'))

parkinsons_model = pickle.load(open(
    'C:/Users/dassu/Desktop/Multi Disease Detection Using ML/Parkinson Disease/parkinsons_model.sav', 'rb'))

breast_cancer_model = pickle.load(open(
    'C:/Users/dassu/Desktop/Multi Disease Detection Using ML/Breast Cancer/breast_cancer_model.sav', 'rb'))


# sidebar for navigation
with st.sidebar:

    selected = option_menu('Multiple Disease Prediction System',
                            ['Diabetes Prediction',
                            'Heart Disease Prediction',
                            'Parkinsons Prediction',
                            'Breast Cancer Prediction'],
                            icons=['clipboard-pulse', 'clipboard2-heart', 'prescription', 'virus'],
                            default_index=0)


# Diabetes Prediction Page
if (selected == 'Diabetes Prediction'):

    # page title
    st.title('Diabetes Prediction using ML')

    # getting the input data from the user
    col1, col2, col3 = st.columns(3)

    with col1:
        Pregnancies = st.text_input('Number of Pregnancies')

    with col2:
        Glucose = st.text_input('Glucose Level')

    with col3:
        BloodPressure = st.text_input('Blood Pressure value')

    with col1:
        SkinThickness = st.text_input('Skin Thickness value')

    with col2:
        Insulin = st.text_input('Insulin Level')

    with col3:
        BMI = st.text_input('BMI value')

    with col1:
        DiabetesPedigreeFunction = st.text_input(
            'Diabetes Pedigree Function value')

    with col2:
        Age = st.text_input('Age')

    # code for Prediction
    diab_diagnosis = ''

    # creating a button for Prediction

    if st.button('Diabetes Test Result'):
        diab_prediction = diabetes_model.predict(
            [[Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age]])

        if (diab_prediction[0] == 1):
            diab_diagnosis = 'The person is diabetic'
        else:
            diab_diagnosis = 'The person is not diabetic'

    st.success(diab_diagnosis)


# Heart Disease Prediction Page
if (selected == 'Heart Disease Prediction'):

    # page title
    st.title('Heart Disease Prediction using ML')

    col1, col2, col3 = st.columns(3)

    with col1:
        age = st.text_input('Age')

    with col2:
        sex = st.text_input('Sex : 1 = Male; 0 = Female')

    with col3:
        cp = st.text_input('Chest Pain types')

    with col1:
        trestbps = st.text_input('Resting Blood\n\rPressure')

    with col2:
        chol = st.text_input('Serum Cholestoral in\n\rmg/dl')

    with col3:
        fbs = st.text_input('Fasting Blood Sugar > 120 mg/dl\n\r: 1 = True; 2 = False')

    with col1:
        restecg = st.text_input('Resting Electrocardiographic results')

    with col2:
        thalach = st.text_input('Maximum Heart Rate achieved')

    with col3:
        exang = st.text_input('Exercise Induced Angina')

    with col1:
        oldpeak = st.text_input('ST depression induced by exercise')

    with col2:
        slope = st.text_input('Slope of the peak exercise ST segment')

    with col3:
        ca = st.text_input('Major vessels colored by flourosopy')

    with col1:
        thal = st.text_input('Thal\n\r: 0 = Normal; 1 = Fixed Defect;\n\r2 = reversable defect')

    # code for Prediction
    heart_diagnosis = ''

    # creating a button for Prediction

    if st.button('Heart Disease Test Result'):
        heart_prediction = heart_disease_model.predict([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])

        if (heart_prediction[0] == 1):
            heart_diagnosis = 'The person is having heart disease'
        else:
            heart_diagnosis = 'The person does not have any heart disease'

    st.success(heart_diagnosis)


# Parkinson's Prediction Page
if (selected == "Parkinsons Prediction"):

    # page title
    st.title("Parkinson's Disease Prediction using ML")

    col1, col2, col3, col4, col5 = st.columns(5)

    with col1:
        fo = st.text_input('MDVP : Fo(Hz)')

    with col2:
        fhi = st.text_input('MDVP : Fhi(Hz)')

    with col3:
        flo = st.text_input('MDVP : Flo(Hz)')

    with col4:
        Jitter_percent = st.text_input('MDVP (%)')

    with col5:
        Jitter_Abs = st.text_input('MDVP (Abs)')

    with col1:
        RAP = st.text_input('MDVP : RAP')

    with col2:
        PPQ = st.text_input('MDVP : PPQ')

    with col3:
        DDP = st.text_input('DDP')

    with col4:
        Shimmer = st.text_input('MDVP : Shimmer')

    with col5:
        Shimmer_dB = st.text_input('MDVP (dB)')

    with col1:
        APQ3 = st.text_input('Shimmer : APQ3')

    with col2:
        APQ5 = st.text_input('Shimmer : APQ5')

    with col3:
        APQ = st.text_input('MDVP : APQ')

    with col4:
        DDA = st.text_input('Shimmer : DDA')

    with col5:
        NHR = st.text_input('NHR')

    with col1:
        HNR = st.text_input('HNR')

    with col2:
        RPDE = st.text_input('RPDE')

    with col3:
        DFA = st.text_input('DFA')

    with col4:
        spread1 = st.text_input('spread1')

    with col5:
        spread2 = st.text_input('spread2')

    with col1:
        D2 = st.text_input('D2')

    with col2:
        PPE = st.text_input('PPE')

    # code for Prediction
    parkinsons_diagnosis = ''

    # creating a button for Prediction
    if st.button("Parkinson's Test Result"):
        parkinsons_prediction = parkinsons_model.predict(
            [[fo, fhi, flo, Jitter_percent, Jitter_Abs, RAP, PPQ, DDP, Shimmer, Shimmer_dB, APQ3, APQ5, APQ, DDA, NHR, HNR, RPDE, DFA, spread1, spread2, D2, PPE]])

        if (parkinsons_prediction[0] == 1):
            parkinsons_diagnosis = "The person has Parkinson's disease"
        else:
            parkinsons_diagnosis = "The person does not have Parkinson's disease"

    st.success(parkinsons_diagnosis)

# Breast Cancer Prediction Page
if (selected == 'Breast Cancer Prediction'):

    # page title
    st.title('Breast Cancer Prediction using ML')
    col1, col2, col3, col4, col5 = st.columns(5)

    with col1:
        rad = st.text_input('Radius \n\r(Mean)')

    with col2:
        texture = st.text_input('Texture \n\r(Mean)')

    with col3:
        perimeter = st.text_input('Perimeter \n\r(Mean)')

    with col4:
        area = st.text_input('Area \n\r(Mean)')

    with col5:
        smoothness = st.text_input('Smoothness \n\r(Mean)')

    with col1:
        compactness = st.text_input('Compactness \n\r(Mean)')

    with col2:
        concavity = st.text_input('Concavity \n\r(Mean)')

    with col3:
        concave_points = st.text_input('Concave Points \n\r(Mean)')

    with col4:
        symmetry = st.text_input('Symmetry\n\r(Mean)')

    with col5:
        fractal_dimension = st.text_input('Fractal Dimension :Jitt\n\r(Mean)')

    with col1:
        rad_error = st.text_input('Radius Error')

    with col2:
        texture_error = st.text_input('Texture Error')

    with col3:
        perimeter_error = st.text_input('Perimeter Error')

    with col4:
        area_error = st.text_input('Area Error')

    with col5:
        smoothness_error = st.text_input('Smoothness Error')

    with col1:
        compactness_error = st.text_input('Compactness\n\rError')

    with col2:
        concavity_error = st.text_input('Concavity\n\rError')

    with col3:
        concave_ppoints_error = st.text_input('Concave Points\n\rError')

    with col4:
        symmetry_error = st.text_input('Symmetry\n\rError')

    with col5:
        fractal_dimension_error = st.text_input('Fractral Dimension Error')

    with col1:
        worst_rad = st.text_input('Worst Radius')

    with col2:
        worst_texture = st.text_input('Worst Texture')

    with col3:
        worst_perimeter = st.text_input('Worst Perimeter')

    with col4:
        worst_area = st.text_input('Worst Area')

    with col5:
        worst_smoothness = st.text_input('Worst Smoothness')

    with col1:
        worst_compactness = st.text_input('Worst\n\rCompactness')

    with col2:
        worst_concavity = st.text_input('Worst\n\rConcavity')

    with col3:
        concave_points = st.text_input('Worst\n\rConcave Points')

    with col4:
        worst_symmetry = st.text_input('Worst\n\rSymmetry')

    with col5:
        worst_fractal_dimension = st.text_input('Worst Fractal Dimension')

    # code for Prediction
    breast_cancer_diagnosis = ''

    # creating a button for Prediction

    if st.button('Breast Cancer Test Result'):
        breast_cancer_prediction = breast_cancer_model.predict([[rad, texture, perimeter, area, smoothness, compactness, concavity, concave_points, symmetry,
                                                                fractal_dimension, rad_error, texture_error, perimeter_error, area_error, smoothness_error, compactness_error, concavity_error, concave_ppoints_error,
                                                                symmetry_error, fractal_dimension_error, worst_rad, worst_texture, worst_perimeter, worst_area, worst_smoothness, worst_compactness, worst_concavity,
                                                                concave_points, worst_symmetry, worst_fractal_dimension]])

        if (breast_cancer_prediction[0] == 1):
            breast_cancer_diagnosis = 'The person is having breast cancer'
        else:
            breast_cancer_diagnosis = 'The person does not have breast cancer'

    st.success(breast_cancer_diagnosis)


