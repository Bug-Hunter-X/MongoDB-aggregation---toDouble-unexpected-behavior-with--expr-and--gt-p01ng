# MongoDB Aggregation: $toDouble Unexpected Behavior with $expr and $gt

This repository demonstrates an unexpected behavior encountered when using the `$toDouble` operator within an `$expr` expression, in conjunction with the `$gt` operator in a MongoDB aggregation pipeline.

## Bug Description
The aggregation query is intended to filter documents where the numeric value of a field is greater than 10.  However, due to an issue related to type conversion and comparison, the query does not return the expected results.

## Bug Reproduction
1.  Ensure you have a MongoDB instance running.
2.  Create a collection with documents that contain a field which may have strings representing numbers.
3.  Run the provided `bug.js` script which executes the erroneous aggregation query.
4.  Observe that the results are incorrect and do not match expected behavior.

## Solution
The solution, provided in `bugSolution.js`, addresses the issue by explicitly converting the field to a number before performing the comparison. Using the `$toDecimal` operator or explicitly parsing the string to a number within an aggregation stage ensures reliable type handling and comparison.
