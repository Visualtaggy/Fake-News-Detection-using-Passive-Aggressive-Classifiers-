import pandas as pd
import numpy as np
import itertools
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import PassiveAggressiveClassifier
from sklearn.metrics import accuracy_score, confusion_matrix
import pickle

# Importing Core data
data_set = pd.read_csv("data.csv")
# Seprating labels like "Fake" / "Real" from our CSV
labels = data_set.label

# Splitting data for training and testing
x_train, x_test, y_train, y_test = train_test_split(
    data_set["text"], labels, test_size=0.2, random_state=20)

# Initializing TF-ID-Vectorizer where tf = term frequence and IDF = weight of rare words
# tfIDF = tf * IDF. Basically removing words that occur more than 70% like 'and','this','the' etc
vector = TfidfVectorizer(stop_words='english', max_df=0.7)


tf_train = vector.fit_transform(x_train)
tf_test = vector.transform(x_test)

passive_aggressive_classifier = PassiveAggressiveClassifier(max_iter=50)
passive_aggressive_classifier.fit(tf_train, y_train)

y_predict = passive_aggressive_classifier.predict(tf_test)
score = accuracy_score(y_test, y_predict)

print("The current accuracy of the model is: " + str(round(score*100, 2)) + "%")
