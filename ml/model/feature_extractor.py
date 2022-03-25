import torch
import numpy as np
from navec import Navec
from slovnet.model.emb import NavecEmbedding
from sklearn.metrics.pairwise import cosine_similarity

path = 'navec_news_v1_1B_250K_300d_100q.tar'
navec = Navec.load(path)


def extract_from_words(words):
    words = [navec.vocab[word.strip().lower()] if navec.vocab.get(word) else navec.vocab['<unk>'] for word in words]
    emb = NavecEmbedding(navec)
    input = torch.tensor(words)
    return torch.mean(emb(input), 0)


def find_closest(target, others, k):
    evaluated = sorted([(other["id"], cosine_similarity(np.array(target["bad"]).reshape(1, -1),
                                                        np.array(other["good"]).reshape(1, -1))) for other in others],
                       key=lambda x: x[1], reverse=True)
    print(evaluated)
    return evaluated[:k]
