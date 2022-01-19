## JavaScript Coding Puzze (Slow API Challenge)

For puzzle details read the pdf file

# Bonus question:

If cached values have an accuracy half-life of 1000 seconds, what is the TTL to achieve 95%
accuracy?

Answer: 
I made the assumption that "accuracy half-life" means the average TTL to have 100% accuracy hitting the updated resource in cache. The 
TTL for a lower accuracy, that is, 95%, has to be grater than 1000s.  So doing a simple relation where I divided 1000s / 95% 
I got as result 1052.63