function isSubsequence(sub, sequence) {
    if (sub.length > sequence) {
        return false;
    }
   
    let seq = sequence.split('');
    let seq_length = sequence.length;
    let start = 0;
    let width = sub.split('').length;

    while(start < seq_length - width) {
       //let partial = sequence.substring(start, start + width);
       let partial = seq.slice(start, start + width).join('');
       if (sub === partial) {
           return true;
       }
       start++;
    }

    return false; 
 }