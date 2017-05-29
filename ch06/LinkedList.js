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
    var prevNode = this.findPrevious(item);
    if(prevNode.next != null){
        prevNode.next = prevNode.next.next;
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
cities.display();
console.log('==========');
cities.remove("LA");
cities.display();