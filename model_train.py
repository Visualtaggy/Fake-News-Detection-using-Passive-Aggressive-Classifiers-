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