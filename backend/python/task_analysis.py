import pandas as pd
import numpy as np
import mysql.connector

def fetch_tasks():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='password',
        database='taskmaster'
    )
    query = "SELECT * FROM tasks"
    df = pd.read_sql(query, connection)
    connection.close()
    return
