class Queue:
    def __init__(self) -> None:
        self.queue_arr = []

    def peek(self):
        if self.is_empty():
            return None

        return self.queue_arr[len(self.queue_arr) - 1]

    def enqueue(self, value: str):
        self.queue_arr.append(value)

    def dequeue(self):
        if self.is_empty():
            return None

        return self.queue_arr.pop()

    def is_empty(self):
        return len(self.queue_arr) == 0

    def print_queue_values(self):
        queue_values = []

        for index in range(len(self.queue_arr)):
            queue_values.append(self.queue_arr[index])

        return queue_values


queue = Queue()

queue.enqueue("Olamide")
queue.enqueue("Joy")
queue.enqueue("Matt")
queue.enqueue("Pavel")
queue.enqueue("Samir")
queue.dequeue()

print(queue.print_queue_values())
