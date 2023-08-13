import numpy as np
import pickle
import warnings
warnings.filterwarnings('ignore')

# loading the saved model
loaded_model = pickle.load(open('C:/Users/dassu/Desktop/Multi Disease Detection Using ML/Heart Disease/heart_disease_model.sav', 'rb'))

input_data = (52,1,2,172,199,1,1,162,0,0.5,2,0,3)

# changing the input_data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

prediction = loaded_model.predict(input_data_reshaped)
print(prediction)

if (prediction[0] == 0):
    print('The person has no heart disease')
else:
    print('The person has heart disease')
 