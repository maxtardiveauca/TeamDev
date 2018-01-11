if ( ! row.num_readings) {
    return 0;
}
return row.sum_readings / row.num_readings;
