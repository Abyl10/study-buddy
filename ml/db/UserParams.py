from typing import List
from pydantic import BaseModel


class UserParams(BaseModel):
    id: int
    good: List[str]
    bad: List[str]