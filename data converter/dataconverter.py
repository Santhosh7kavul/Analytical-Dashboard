
import pandas as pd
import os

file_path = 'data.csv'
ev_data = pd.read_csv(file_path)

ev_data.head(), ev_data.info()

output_dir = "./output"
os.makedirs(output_dir, exist_ok=True)

# Manufacturers
make_model_counts = ev_data.groupby(['Make', 'Model']).size().reset_index(name='Count')
make_model_counts.to_json(f"{output_dir}/Make_Model_Counts.json", orient='records')

county_counts = ev_data['Model'].value_counts().reset_index()
county_counts.columns = ['Model', 'Count']
county_counts.to_json(f"{output_dir}/Model_Distribution.json", orient='records')

county_counts = ev_data['Make'].value_counts().reset_index()
county_counts.columns = ['Make', 'Count']
county_counts.to_json(f"{output_dir}/Make_Distribution.json", orient='records')


# Electric Vehicle Type
ev_type_counts = ev_data['Electric Vehicle Type'].value_counts().reset_index()
ev_type_counts.columns = ['Electric Vehicle Type', 'Count']
ev_type_counts.to_json(f"{output_dir}/Electric_Vehicle_Type_Distribution.json", orient='records')

# Category 3: Geographical distribution by County
county_counts = ev_data['County'].value_counts().reset_index()
county_counts.columns = ['County', 'Count']
county_counts.to_json(f"{output_dir}/County_Distribution.json", orient='records')


# Category 4: Geographical distribution by City
if 'City' in ev_data.columns:
    city_counts = ev_data['City'].value_counts().reset_index()
    city_counts.columns = ['City', 'Count']
    city_counts.to_json(f"{output_dir}/City_Distribution.json", orient='records')


# Category 4: Electric Range comparison (Grouped by ranges)
# bins = [0, 100, 200, 300, 400, 500, ev_data['Electric Range'].max()]
# labels = ['0-100', '101-200', '201-300', '301-400', '401-500', '500+']
# ev_data['Range Category'] = pd.cut(ev_data['Electric Range'], bins=bins, labels=labels, right=False)
# range_counts = ev_data['Range Category'].value_counts().reset_index()
# range_counts.columns = ['Range Category', 'Count']
# range_counts.to_json(f"{output_dir}/Electric_Range_Distribution.json", orient='records')

# Category 5: Base MSRP grouping (Grouped by price ranges)
bins_msrp = [0, 20000, 40000, 60000, 80000, 100000, ev_data['Base MSRP'].max()]
labels_msrp = ['0-20k', '20k-40k', '40k-60k', '60k-80k', '80k-100k', '100k+']
ev_data['MSRP Category'] = pd.cut(ev_data['Base MSRP'], bins=bins_msrp, labels=labels_msrp, right=False)
msrp_counts = ev_data['MSRP Category'].value_counts().reset_index()
msrp_counts.columns = ['MSRP Category', 'Count']
msrp_counts.to_json(f"{output_dir}/MSRP_Distribution.json", orient='records')

# Category 6: Clean Alternative Fuel Vehicle Eligibility distribution
cafv_counts = ev_data['Clean Alternative Fuel Vehicle (CAFV) Eligibility'].value_counts().reset_index()
cafv_counts.columns = ['CAFV Eligibility', 'Count']
cafv_counts.to_json(f"{output_dir}/CAFV_Eligibility_Distribution.json", orient='records')

# Confirm file paths
print({
    "Make_Model_Counts": f"{output_dir}/Make_Model_Counts.json",
    "Electric_Vehicle_Type_Distribution": f"{output_dir}/Electric_Vehicle_Type_Distribution.json",
    "County_Distribution": f"{output_dir}/County_Distribution.json",
    "City_Distribution": f"{output_dir}/City_Distribution.json" if 'City' in ev_data.columns else "City column not found",
    "Electric_Range_Distribution": f"{output_dir}/Electric_Range_Distribution.json",
    "MSRP_Distribution": f"{output_dir}/MSRP_Distribution.json",
    "CAFV_Eligibility_Distribution": f"{output_dir}/CAFV_Eligibility_Distribution.json"
})
