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
