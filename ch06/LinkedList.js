/**
 * Created by sora on 2017. 5. 29..
 */

function LList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
    this.dispReverse = dispReverse;
}

function find(item){
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item){
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.previous = currNode;
    newNode.next = currNode.next;
    currNode.next = newNode;
}

function findPrevious(item){
    var currNode = this.head;
    while(currNode.next != null && currNode.next.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item){
    var currNode = this.find(item);
    var prevNode = currNode.previous;

    if(currNode.next != null){
        prevNode.next = currNode.next;
        currNode.next.previous = prevNode;
        currNode.next = null;
        currNode.previous = null;
    }
}


function findLast(){
    var currNode = this.head;
    while(currNode.next != null){
        currNode = currNode.next;
    }
    return currNode;
}

function dispReverse(){
    var currNode = this.findLast();
    while(currNode.previous != null){
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

function display(){
    var currNode = this.head;
    while(currNode.next != null){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}





var cities = new LList();
cities.insert('San Francisco','head');
cities.insert('LA','San Francisco');
cities.insert('London', 'LA');
cities.insert('paris','London');
cities.display();
console.log('==========');
cities.remove("LA");
cities.display();
console.log('==========');
cities.dispReverse();